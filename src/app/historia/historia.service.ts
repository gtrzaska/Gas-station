import {Injectable, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {HttpClient} from "@angular/common/http";
import * as jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService implements OnInit {
  isLoading = false;
  private isAuth = false;
  link = 'https://cors-anywhere.herokuapp.com/http://gtrzaska.cba.pl/';
  data = [];
  historia = [];
  public email = "";
  public uprawnienia: number;

  constructor(private authService: AuthService, private http: HttpClient) {
    this.authService.user.subscribe(user => {
      this.isAuth = !user ? false : true;
      if (this.isAuth) {
        this.uprawnienia = +user.uprawnienia;
        if (this.uprawnienia === 0) {
          this.email = user.email
        }
      }
    });

  }

  ngOnInit() {
    this.historiaLadowanie(false);
  }

  historiaLadowanie(dataB?: boolean) {
    this.isLoading = true;
    this.historia = [];
    this.data = [];
    this.http.get<any>(this.link + 'historia_1.php',).subscribe(data => {
      this.data.push(data);
      let j = 0;
      for (let i = 0; i < this.data[0].length; i++) {
        //  this.historia[i] = [];
        // 0-id, 1-karta, 2-ilosc,3-cena, 4-data, 5 produkt
        //6-imie, 7-nazwisko,8- mail, 9-pesel, 10 regon
        //11- nip
        if (this.uprawnienia == 0) {

          if (this.data[0][i].Email === this.email) {
            if (!dataB) {
              this.historia[j] = [this.data[0][i].idT, this.data[0][i].Karta, this.data[0][i].ilosc, this.data[0][i].cenaT, this.data[0][i].data, this.data[0][i].produkt, this.data[0][i].Imie,
                this.data[0][i].Nazwisko, this.data[0][i].Email, this.data[0][i].PESEL, this.data[0][i].REGON, this.data[0][i].NIP]
              j++;
            } else if (new Date(this.data[0][i].data).getMonth() === new Date().getMonth()) {
              this.historia[j] = [this.data[0][i].idT, this.data[0][i].Karta, this.data[0][i].ilosc, this.data[0][i].cenaT, this.data[0][i].data, this.data[0][i].produkt, this.data[0][i].Imie,
                this.data[0][i].Nazwisko, this.data[0][i].Email, this.data[0][i].PESEL, this.data[0][i].REGON, this.data[0][i].NIP]
              j++;
            }
          }
        } else if (this.uprawnienia > 0) {

          console.log(new Date(this.data[0][i].data));
          if (!dataB) {
            this.historia[i] = [this.data[0][i].idT, this.data[0][i].Karta, this.data[0][i].ilosc, this.data[0][i].cenaT, this.data[0][i].data, this.data[0][i].produkt, this.data[0][i].Imie,
              this.data[0][i].Nazwisko, this.data[0][i].Email, this.data[0][i].PESEL, this.data[0][i].REGON, this.data[0][i].NIP]
          } else if (new Date(this.data[0][i].data).getMonth() === new Date().getMonth()) {
            this.historia[j] = [this.data[0][i].idT, this.data[0][i].Karta, this.data[0][i].ilosc, this.data[0][i].cenaT, this.data[0][i].data, this.data[0][i].produkt, this.data[0][i].Imie,
              this.data[0][i].Nazwisko, this.data[0][i].Email, this.data[0][i].PESEL, this.data[0][i].REGON, this.data[0][i].NIP]
            j++;
          }
        }
      }

      console.log(this.historia);
      this.isLoading = false;
    }, error => console.error(error));
  }

  faktura(transakcja: any) {
    var doc = new jsPDF()
    doc.setFontSize(17);
    doc.text('Stacja benzynowa PB', 75, 10);
    doc.text('ul. Jana Pawla II 37, 31-864 Krakow', 60, 20);
    doc.text('NIP: 777-12-75-454', 80, 30);
    doc.line(20, 40, 190, 40);
    doc.text('FAKTURA', 85, 50);
    doc.setFontSize(13);
    doc.text('Nabywca:', 30, 60);
    doc.text(transakcja[6] + " " + transakcja[7], 30, 68);
    doc.text('NIP: ' + transakcja[11], 30, 76);
    doc.line(20, 84, 190, 84);
    doc.text(transakcja[5], 30, 92);
    doc.text(transakcja[2] + " * " + (+transakcja[3] / +transakcja[2]).toFixed(2), 30, 100);
    doc.text(transakcja[3] + " zl", 30, 108);
    doc.line(20, 115, 190, 115);
    doc.setFontSize(20);
    doc.text(" SUMA", 30, 124);
    doc.text("PLN      " + transakcja[3], 130, 124);

    doc.save('faktura.pdf')
  }

}
