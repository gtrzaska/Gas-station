import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {HeaderComponent} from "../header/header.component";
import {AuthComponent} from "../auth/auth.component";
import {AuthService} from "../auth/auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-dane-kontaktowe',
  templateUrl: './dane-kontaktowe.component.html',
  styleUrls: ['./dane-kontaktowe.component.css']
})
export class DaneKontaktoweComponent implements OnInit {

  isEdit = false;
  link = 'https://cors-anywhere.herokuapp.com/http://gtrzaska.cba.pl/';
  isLoading = false;
  data = [];
  dane = [];
  uprawnienia = 0;

  constructor(private http: HttpClient, private router: Router, public authService: AuthService) {
    this.daneFetch();

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
    this.authService.user.subscribe(user => {
      if (user) {
        this.uprawnienia = +user.uprawnienia;
      }
    });
  }

  edytuj(f: NgForm) {
    let adres = f.value.adres;
    let telefon = f.value.telefon;
    let fax = f.value.fax;
    this.isLoading = true;
    this.http.post<any>(this.link + 'dane.php', {
      adres, telefon, fax
    })
      .subscribe(error => {

      }, error => {
        if (error.status == '200') {
          this.daneFetch();
          this.router.navigate(['./']);
          this.isLoading = false;

        } else {
          alert("Coś nie tak");
          this.isLoading = false;
        }
      });
    this.isEdit = false;
  }
}
