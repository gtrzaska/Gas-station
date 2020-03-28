import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class KlienciService implements OnInit {
  isFetch = false;
  // private onusun: string;
  data = [];
  users = [];
  isLoading = false;
  link = 'http://gtrzaska.cba.pl/';

  constructor(private http: HttpClient, private router: Router) {
    //this.users = [];
    this.isLoading = true;
    this.http.get(this.link + 'auth.php').subscribe(data => {
      this.data.push(data);
      console.log(this.data);
      console.log("-3333---");
      console.log(this.data[0]);
      console.log(this.data[0].length);
      for (let i = 0; i < this.data[0].length; i++) {
        this.users[i] = [];
        this.users[i] = [this.data[0][i].Uzytkownik_id, this.data[0][i].Imie, this.data[0][i].Nazwisko, this.data[0][i].Email, this.data[0][i].Ulica, this.data[0][i].Miasto, this.data[0][i].Kod_pocztowy, this.data[0][i].PESEL, this.data[0][i].REGON, this.data[0][i].NIP];
      }
      this.isFetch = true;
      this.isLoading = false;
    }, error => console.error(error));


  }

  ngOnInit() {
  }

  klienci() {
    this.isLoading = true;
    this.users = [];
    this.data = [];
    if (this.isFetch) {
      this.http.get(this.link + 'auth.php').subscribe(data => {
        this.data.push(data);
        console.log(this.data);
        for (let i = 0; i < this.data[0].length; i++) {
          this.users[i] = [];
          this.users[i] = [this.data[0][i].Uzytkownik_id, this.data[0][i].Imie, this.data[0][i].Nazwisko, this.data[0][i].Email, this.data[0][i].Ulica, this.data[0][i].Miasto, this.data[0][i].Kod_pocztowy, this.data[0][i].PESEL, this.data[0][i].REGON, this.data[0][i].NIP];
        }
        this.isLoading = false;
      }, error => console.error(error));
    }

  }

  usunKlienta(email: string) {
    let onusun = 'usunKlienta)';
    this.http.post<any>(this.link + 'users.php', {
      email,
      onusun
    })
      .subscribe(error => {

      }, error => {
        if (error.status == '200') {
          this.isLoading = false;
          this.klienci();
          this.router.navigate(['./klienci'])
        } else {
          alert("Coś nie tak");
          this.isLoading = false;
        }
      });
  }

  edytujKlienta(email: string, imie: string, nazwisko: string, ulica: string, miasto: string, kod: string, pesel: string, regon: string, nip: string) {
    let onusun = 'edytujKlienta)';
    this.http.post<any>(this.link + 'users.php', {
      email, onusun, imie, nazwisko, ulica, miasto, kod, pesel, regon, nip
    })
      .subscribe(error => {

      }, error => {
        if (error.status == '200') {
          this.isLoading = false;
          this.klienci();
          this.router.navigate(['./klienci'])
        } else {
          alert("Coś nie tak");
          this.isLoading = false;
        }
      });
  }


}
