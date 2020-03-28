import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class PracownicyService implements OnInit {
  isFetch = false;
  data = [];
  users = [];
  isLoading = false;
  link = 'http://gtrzaska.cba.pl/';

  constructor(private http: HttpClient, private router: Router) {
    this.pracownicy();
  }

  ngOnInit() {
  }

  pracownicy() {
    this.isLoading = true;
    this.users = [];
    this.data = [];
    //  if (this.isFetch) {
    this.http.get(this.link + 'pracownicy.php').subscribe(data => {
      this.data.push(data);
      console.log(this.data);
      for (let i = 0; i < this.data[0].length; i++) {
        this.users[i] = [];
        this.users[i] = [this.data[0][i].id, this.data[0][i].Imie, this.data[0][i].Nazwisko, this.data[0][i].Email, this.data[0][i].Haslo, this.data[0][i].FK_Uprawnienia, this.data[0][i].Nazwa];
      }
      this.isLoading = false;
    }, error => console.error(error));
    //}
  }


}
