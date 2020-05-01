import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  user = [];
  data = [];
  link = 'https://cors-anywhere.herokuapp.com/http://gtrzaska.cba.pl/';
  isLoading = false;
  peselPom: string;
  regonPom: string;
  czyFirma = false;

  constructor(private http: HttpClient, private router: Router) {
  }

  profil(email: string, uprawnienia: number) {
    console.log(email + "     " + uprawnienia);
    this.isLoading = true;
    this.user = [];
    this.data = [];
    if (uprawnienia != 0) {
      this.http.post(this.link + 'profil.php', {email, uprawnienia}).subscribe(data => {
        this.data.push(data);
        console.log(this.data);
        for (let i = 0; i < this.data[0].length; i++) {
          this.user = [this.data[0][i].id, this.data[0][i].Imie, this.data[0][i].Nazwisko, this.data[0][i].Email, this.data[0][i].Haslo, this.data[0][i].FK_Uprawnienie, this.data[0][i].Nazwa];
        }
        this.isLoading = false;
      }, error => console.error(error));
    } else {
      this.http.post(this.link + 'profil.php', {email, uprawnienia}).subscribe(data => {
        this.data.push(data);
        console.log(this.data);
        for (let i = 0; i < this.data[0].length; i++) {
          this.regonPom = this.data[0][i].REGON;
          this.peselPom = this.data[0][i].PESEL;
          this.user = [this.data[0][i].Uzytkownik_id, this.data[0][i].Imie, this.data[0][i].Nazwisko, this.data[0][i].Email, this.data[0][i].Ulica, this.data[0][i].Miasto, this.data[0][i].Kod_pocztowy, this.data[0][i].PESEL, this.data[0][i].REGON, this.data[0][i].NIP, this.data[0][i].Haslo];
        }
        this.isLoading = false;
      }, error => console.error(error));
    }
  }

  usunProfil(email: string, uprawnienia: number) {
    let onusun;
    this.isLoading = true;
    if (uprawnienia > 1) {
      onusun = 'usunPracownika';
    } else {
      onusun = 'usunKlienta';
    }
    this.http.post<any>(this.link + 'users.php', {
      email,
      onusun
    })
      .subscribe(error => {

      }, error => {
        if (error.status == '200') {
          this.isLoading = false;
          this.router.navigate(['./'])
        } else {
          alert("Coś nie tak");
          this.isLoading = false;
        }
      });
  }

  edytujProfil(email: string, uprawnienia: number, imie: string, nazwisko: string, haslo: string, stanowisko?: string, ulica?: string, miasto?: string, kod?: string, pesel?: string, regon?: string, nip?: string) {
    this.isLoading = true;
    stanowisko = this.user[5];
    let onusun;
    if (uprawnienia >= 1) {
      onusun = 'edytujPracownika';
      this.http.post<any>(this.link + 'users.php', {
        email, onusun, imie, nazwisko, haslo, stanowisko
      })
        .subscribe(error => {

        }, error => {
          if (error.status == '200') {
            this.isLoading = false;
            this.profil(email, uprawnienia);
          } else {
            alert("Coś nie tak");
            this.isLoading = false;
          }
        });
    } else {
      onusun = 'edytujKlienta';
      this.http.post<any>(this.link + 'users.php', {
        email, onusun, imie, nazwisko, haslo, ulica, miasto, kod, pesel, regon, nip
      })
        .subscribe(error => {

        }, error => {
          if (error.status == '200') {
            this.isLoading = false;
            this.profil(email, uprawnienia);
          } else {
            alert("Coś nie tak");
            this.isLoading = false;
          }
        });
    }

  }

  pesel = false;
  regon = false;

  onFirma() {
    this.czyFirma = !this.czyFirma;
    this.pesel = this.czyFirma;
    this.regon = !this.czyFirma;
    if (this.czyFirma) {
      this.user[7] = '';
      this.user[8] = this.regonPom;
    } else {
      this.user[8] = '';
      this.user[7] = this.peselPom;
    }
  }
}
