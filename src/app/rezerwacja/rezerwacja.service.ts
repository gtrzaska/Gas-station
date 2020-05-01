import {Injectable, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RezerwacjaService implements OnInit {
  private isAuth = false;
  isLoading = false;
  public email = ""
  public uprawnienia: number;
  public imie = "";
  public nazwisko = "";
  link = 'https://cors-anywhere.herokuapp.com/http://gtrzaska.cba.pl/';
  data = [];
  rezerwacjeA = [];

  constructor(private authService: AuthService, private http: HttpClient) {
    this.rezerwacje();
    this.authService.user.subscribe(user => {
      this.isAuth = !user ? false : true;
      if (this.isAuth) {
        this.uprawnienia = +user.uprawnienia;
        if (this.uprawnienia === 0) {
          this.imie = user.imie;
          this.nazwisko = user.nazwisko;
          this.email = user.email
        }
      }
    });
  }

  ngOnInit() {
  }

  rezerwacje(email?: string) {
    this.isLoading = true;
    this.rezerwacjeA = [];
    this.data = [];
    let tryb = 'rezerwacje';
    this.http.get<any>(this.link + 'rezerwacje_fetch.php',).subscribe(data => {
      this.data.push(data);
      console.log(this.data);
      for (let i = 0; i < this.data[0].length; i++) {
        this.rezerwacjeA[i] = [];
        this.rezerwacjeA[i] = [this.data[0][i].id, this.data[0][i].Data, this.data[0][i].godzina, this.data[0][i].Email, this.data[0][i].Imie, this.data[0][i].Nazwisko];
      }
      this.isLoading = false;
    }, error => console.error(error));
  }

  dodajRezerwacje(email: string, godzina: string, data: string) {
    if (this.uprawnienia === 0) {
      email = this.email;
    }
    this.isLoading = true;
    let tryb = 'dodaj';
    this.http.post<any>(this.link + 'rezerwacja.php', {
      email, data, godzina, tryb
    })
      .subscribe(error => {

      }, error => {
        if (error.status == '200') {
          this.rezerwacje();
          this.isLoading = false;
        } else if (error.status == '301') {
          alert("Brak uzytkownika");
          this.isLoading = false;
        } else if (error.status == '302') {
          alert("Termin niedostępny");
          this.isLoading = false;
        } else {
          alert("Coś nie tak");
          this.isLoading = false;
        }
      });
  }

}
