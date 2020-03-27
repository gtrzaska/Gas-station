import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {User} from './user.model';
import {BehaviorSubject} from 'rxjs';
import {NgForm} from "@angular/forms";
import {map, tap} from "rxjs/operators";
import {AuthComponent} from "./auth.component";


@Injectable({providedIn: 'root'})
export class AuthService {
  link = 'https://cors-anywhere.herokuapp.com/gtrzaska.cba.pl/';
  user = new BehaviorSubject<User>(null);


  constructor(private http: HttpClient, private router: Router) {
  }

  signup(imie: string, nazwisko: string, email: string, password: string, ulica: string,
         miasto: string, kod: string, pesel: string, regon: string, nip: string) {

    this.http.post<any>(this.link + 'register_u.php', {
      email, password, imie, nazwisko, ulica,
      miasto, kod, pesel, regon, nip
    })
      .subscribe(error => {

      }, error => {
        if (error.status == '200') {
          this.handleUser(email, '0');
          this.router.navigate(['']);
        } else if (error.status == '409') {
          this.user.next(null);
          alert("Email zajęty!")
        } else {
          this.user.next(null);
          alert("Coś nie tak")
        }
      });
  }

  login(email: string, password: string) {

    this.http.post<any>(this.link + 'login.php', {email, password})
      .subscribe(data => {

        console.log(data[0]);
        if (data[0]) {
          //console.log(data[0].FK_Uprawnienie);
          this.handleUser(data[0].Email, data[0].FK_Uprawnienie);
          this.router.navigate(['']);
        } else {
          this.user.next(null);
          alert("Zły email lub hasło!")
        }
      }, error => console.error(error));


  }


  /*    // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i][0] === email) {
          if (this.users[i][1] === password) {
            this.handleUser(email, this.users[i][2]);
            this.router.navigate(['']);
            poprawneDane = true;
          }
        }
      }
      if (!poprawneDane) {
        return false;
      }*/


  autoLogin() {
    const userData: {
      email: string,
      uprawnienia: string
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    this.user.next(new User(userData.email, userData.uprawnienia));
    console.log('as ' + this.user.value.uprawnienia);
  }

  logout() {
    this.user.next(null);
    localStorage.removeItem('userData');
  }

  private handleUser(email: string, uprawnienia: string) {
    const user = new User(email, uprawnienia);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }
}
