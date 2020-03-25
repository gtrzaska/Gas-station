import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  users = [['januszlpg@luj.com', '123456', 'klient'],
    ['wladziu@luj.com', '123456', 'klient'],
    ['mail@luj.com', '123456', 'klient'],
    ['blee@luj.com', '123456', 'klient'],
    ['szefu@luj.com', '123456', 'wlasciciel'],
    ['pracownik@luj.com', '123456', 'pracownik'],
  ];

  constructor(private http: HttpClient, private router: Router) {
  }

  signup(email: string, password: string) {
  }

  login(email: string, password: string) {
    let poprawneDane = false;
    // tslint:disable-next-line:prefer-for-of
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
    }
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
