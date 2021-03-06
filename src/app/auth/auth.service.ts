import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {User} from './user.model';
import {BehaviorSubject} from 'rxjs';
import {NgForm} from "@angular/forms";
import {map, tap} from "rxjs/operators";
import {AuthComponent} from "./auth.component";
import {KlienciService} from "../klienci/klienci.service";


@Injectable({providedIn: 'root'})
export class AuthService {
  // link = 'https://cors-anywhere.herokuapp.com/gtrzaska.cba.pl/';
  link = 'https://cors-anywhere.herokuapp.com/http://gtrzaska.cba.pl/';
  user = new BehaviorSubject<User>(null);
  isLoading = false;
  logowanie = true;

  constructor(private http: HttpClient, private router: Router, private klienciService: KlienciService) {
  }

  signup(imie: string, nazwisko: string, email: string, password: string, ulica: string,
         miasto: string, kod: string, pesel: string, regon: string, nip: string, tryb: string) {
    this.isLoading = true;
    this.http.post<any>(this.link + 'register_u.php', {
      email, password, imie, nazwisko, ulica,
      miasto, kod, pesel, regon, nip
    })
      .subscribe(t => {
        console.log(t);
      }, error => {
        if (error.status == '200') {
          if (tryb === 'rejestracja') {
            this.handleUser(email, '0', imie, nazwisko);
            this.router.navigate(['']);
            this.isLoading = false;
          } else if (tryb === 'rejestracja2') {
            this.router.navigate(['./klienci']);
            this.klienciService.klienci();
            this.isLoading = false;
          }
        } else if (error.status == '201') {
          this.user.next(null);
          // alert("Email zajęty!");
          this.logowanie = false;
          this.isLoading = false;
        } else {
          this.user.next(null);
          alert("Coś nie tak")
          this.isLoading = false;
        }
      });
  }

  login(email: string, password: string) {
    this.isLoading = true;
    this.http.post<any>(this.link + 'login.php', {email, password})
      .subscribe(data => {

        // console.log(data[0]);
        //console.log(data[0].Uprawnienia);
        if (data[0]) {
          if (data[0].Uprawnienia === '0') {
            this.handleUser(data[0].Email, data[0].Uprawnienia, data[0].Imie, data[0].Nazwisko);
          } else {
            this.handleUser(data[0].Email, data[0].FK_Uprawnienie, data[0].Imie, data[0].Nazwisko);
          }
          this.isLoading = false;
          this.router.navigate(['']);
        } else {
          this.user.next(null);
          this.logowanie = false;
          // alert("Zły email lub hasło!");
          this.isLoading = false;
        }
      }, error => console.error(error));
  }

  autoLogin() {
    const userData: {
      email: string,
      uprawnienia: string,
      imie: string,
      nazwisko: string
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    this.user.next(new User(userData.email, userData.uprawnienia, userData.imie, userData.nazwisko));
    console.log('as ' + this.user.value.uprawnienia);
  }

  logout() {
    this.user.next(null);
    this.logowanie = true;
    localStorage.removeItem('userData');
  }

  private handleUser(email: string, uprawnienia: string, imie: string, nazwisko: string) {
    const user = new User(email, uprawnienia, imie, nazwisko);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }
}
