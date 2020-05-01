import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../auth/user.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {KlienciService} from "../klienci/klienci.service";

@Injectable({
  providedIn: 'root'
})
export class CennikService {

  link = 'https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/http://gtrzaska.cba.pl/';
  isLoading = false;
  data = [];
  cennik = [];

  constructor(private http: HttpClient, private router: Router) {
    this.cennikFetch();
  }

  cennikFetch() {
    this.isLoading = true;
    this.cennik = [];
    this.data = [];
    this.http.get(this.link + 'cennik_fetch.php').subscribe(data => {
      this.data.push(data);
      console.log(this.data);
      for (let i = 0; i < this.data[0].length; i++) {
        this.cennik[i] = [];
        this.cennik[i] = [this.data[0][i].id, this.data[0][i].produkt, this.data[0][i].cena];
      }
      this.isLoading = false;
    }, error => console.error(error));
  }

  cenyZamien(id: number, id_l: string) {
    const cena = (<HTMLInputElement>document.getElementById(id_l)).value;
    this.isLoading = true;
    let tryb = 'edytuj';
    this.http.post<any>(this.link + 'cennik.php', {
      id, cena, tryb
    })
      .subscribe(error => {

      }, error => {
        if (error.status == '200') {
          this.isLoading = false;
          this.cennikFetch();
        } else {
          alert("Coś nie tak");
          this.isLoading = false;
        }
      });
  }


  dodajProdukt(nazwa: string, cena: string) {
    this.isLoading = true;
    let tryb = 'dodaj';
    this.http.post<any>(this.link + 'cennik.php', {
      nazwa, cena, tryb
    })
      .subscribe(error => {

      }, error => {
        if (error.status == '200') {
          this.isLoading = false;
          this.cennikFetch();
        } else {
          alert("Coś nie tak");
          this.isLoading = false;
        }
      });
  }

  usunProdukt(id: any) {
    this.isLoading = true;
    let tryb = 'usun';
    this.http.post<any>(this.link + 'cennik.php', {
      id, tryb
    })
      .subscribe(error => {

      }, error => {
        if (error.status == '200') {
          this.isLoading = false;
          this.cennikFetch();
        } else {
          alert("Coś nie tak");
          this.isLoading = false;
        }
      });
  }

}
