import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class PracownicyService implements OnInit {
  data = [];
  users = [];
  isLoading = false;
  link = 'https://cors-anywhere.herokuapp.com/http://gtrzaska.cba.pl/';

  constructor(private http: HttpClient, private router: Router) {
    this.pracownicy();
  }

  ngOnInit() {
  }

  pracownicy() {
    this.isLoading = true;
    this.users = [];
    this.data = [];
    this.http.get(this.link + 'pracownicy.php').subscribe(data => {
      this.data.push(data);
      console.log(this.data);
      for (let i = 0; i < this.data[0].length; i++) {
        this.users[i] = [];
        this.users[i] = [this.data[0][i].id, this.data[0][i].Imie, this.data[0][i].Nazwisko, this.data[0][i].Email, this.data[0][i].Haslo, this.data[0][i].FK_Uprawnienie, this.data[0][i].Nazwa];
      }
      this.isLoading = false;
    }, error => console.error(error));
  }

  dodajPracownika(imie: string, nazwisko: string, email: string, haslo: string, stanowisko: string) {
    this.isLoading = true;
    this.http.post<any>(this.link + 'register_p.php', {
      imie, nazwisko, email, haslo, stanowisko
    })
      .subscribe(error => {

      }, error => {
        if (error.status == '200') {
          this.pracownicy();
          this.router.navigate(['./pracownicy']);
          this.isLoading = false;

        } else {
          alert("Email zajęty!");
          this.isLoading = false;
        }
      });
  }

  usunPracownika(email: string) {
    let onusun = 'usunPracownika';
    this.http.post<any>(this.link + 'users.php', {
      email,
      onusun
    })
      .subscribe(error => {

      }, error => {
        if (error.status == '200') {
          this.isLoading = false;
          this.pracownicy();
          this.router.navigate(['./pracownicy'])
        } else {
          alert("Coś nie tak");
          this.isLoading = false;
        }
      });
  }

  edytujPracownika(email: string, imie: string, nazwisko: string, stanowisko: string, haslo: string) {
    let onusun = 'edytujPracownika';
    this.http.post<any>(this.link + 'users.php', {
      email, onusun, imie, nazwisko, stanowisko, haslo
    })
      .subscribe(error => {

      }, error => {
        if (error.status == '200') {
          this.isLoading = false;
          this.pracownicy();
          this.router.navigate(['./pracownicy'])
        } else {
          alert("Coś nie tak");
          this.isLoading = false;
        }
      });
  }


}
