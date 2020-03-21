import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) {
  }

  signup(email: string, password: string) {
  }

  login(email: string, password: string) {
    this.handleUser(email, 'wlasciciel');
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
