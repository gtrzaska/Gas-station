import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuth = false;
  public email: string;
  public uprawnienia: number;
  constructor(public authService: AuthService) {
  }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.isAuth = !user ? false : true;
      if (this.isAuth) {
        this.email = user.email;
        this.uprawnienia = +user.uprawnienia;
      }
    });
  }

  logout() {
    this.authService.logout();
    this.uprawnienia = null;
  }

}
