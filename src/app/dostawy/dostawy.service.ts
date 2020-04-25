import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DostawyService {
  link = 'http://gtrzaska.cba.pl/';
  isLoading = false;
  zamowienie = [];

  constructor(private http: HttpClient) {

  }

  dodajDoZamowienia(id: number, produkt: string, ilosc: number) {
    this.zamowienie.push([id, produkt, ilosc]);
    console.log(this.zamowienie);
  }

  usun(i: number) {
    this.zamowienie.splice(i, 1);
  }

  wyczysc() {
    this.zamowienie = [];
  }

  zamow() {
    this.isLoading = true;

    for (let i = 0; i < this.zamowienie.length; i++) {
      console.log('id: ' + this.zamowienie[i][0]);
      if (+this.zamowienie[i][0] < 5) {
        console.log('if true');
        let id = this.zamowienie[i][0];
        let ilosc = this.zamowienie[i][2];
        this.http.post<any>(this.link + 'dostawa.php', {id, ilosc}).subscribe(data => {


        }, error => console.error(error));
      } else {
        console.log('if false');
      }
    }
    this.isLoading = false;
    this.zamowienie = [];
  }
}

