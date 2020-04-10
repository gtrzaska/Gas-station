import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {HeaderComponent} from "../header/header.component";
import {AuthComponent} from "../auth/auth.component";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-dane-kontaktowe',
  templateUrl: './dane-kontaktowe.component.html',
  styleUrls: ['./dane-kontaktowe.component.css']
})
export class DaneKontaktoweComponent implements OnInit {

  isEdit = false;
  link = 'http://gtrzaska.cba.pl/';
  isLoading = false;
  data = [];
  dane = [];
  uprawnienia = 0;

  constructor(private http: HttpClient, private router: Router, public authService: AuthService) {
    this.daneFetch();
    this.authService.user.subscribe(user => {
      if (user) {
        this.uprawnienia = +user.uprawnienia;
      }
    });
  }

  daneFetch() {
    this.isLoading = true;
    this.dane = [];
    this.data = [];
    this.http.get(this.link + 'dane_fetch.php').subscribe(data => {
      this.data.push(data);
      for (let i = 0; i < this.data[0].length; i++) {
        this.dane = [this.data[0][i].adres, this.data[0][i].telefon, this.data[0][i].fax];
      }
      this.isLoading = false;
    }, error => console.error(error));
  }

  ngOnInit(): void {

  }

}
