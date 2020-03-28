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
  // link = 'https://cors-anywhere.herokuapp.com/gtrzaska.cba.pl/';
  link = 'http://gtrzaska.cba.pl/';
  user = new BehaviorSubject<User>(null);
  isLoading = false;

  constructor(private http: HttpClient, private router: Router) {
  }

  signup(imie: string, nazwisko: string, email: string, password: string, ulica: string,
         miasto: string, kod: string, pesel: string, regon: string, nip: string, tryb: string) {
    this.isLoading = true;
    this.http.post<any>(this.link + 'register_u.php', {
      email, password, imie, nazwisko, ulica,
      miasto, kod, pesel, regon, nip
    })
      .subscribe(error => {

      }, error => {
        if (error.status == '200') {
          if (tryb === 'rejestracja') {
            this.handleUser(email, '0');
            this.router.navigate(['']);
            this.isLoading = false;
          } else if (tryb === 'rejestracja2') {
            this.router.navigate(['./klienci']);
            this.isLoading = false;
          }
        } else {
          this.user.next(null);
          alert("Email zajęty!");
          this.isLoading = false;
        }
        /*else {
          this.user.next(null);
          alert("Coś nie tak")
        }*/
      });
  }

  login(email: string, password: string) {
    this.isLoading = true;
    this.http.post<any>(this.link + 'login.php', {email, password})
      .subscribe(data => {

        console.log(data[0]);
        if (data[0]) {
          //console.log(data[0].FK_Uprawnienie);
          this.handleUser(data[0].Email, data[0].FK_Uprawnienie);
          this.isLoading = false;
          this.router.navigate(['']);
        } else {
          this.user.next(null);
          alert("Zły email lub hasło!");
          this.isLoading = false;
        }
      }, error => console.error(error));
  }

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
