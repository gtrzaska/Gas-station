import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-cennik',
  templateUrl: './cennik.component.html',
  styleUrls: ['./cennik.component.css']
})
export class CennikComponent implements OnInit {
  cenaE95 = 5.79;
  cenaE98 = 5.99;
  cenaON = 5.59;
  cenaLPG = 2.89;
  uprawnienia: string;
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      if (user) {
        this.uprawnienia = user.uprawnienia;
        console.log('h ' + user);
      }
    });
  }
  onSubmit(authForm: NgForm) {
    this.cenaE95 = authForm.value.e95;
    this.cenaE98 = authForm.value.e98;
    this.cenaON = authForm.value.on;
    this.cenaLPG = authForm.value.lpg;
  }
}
