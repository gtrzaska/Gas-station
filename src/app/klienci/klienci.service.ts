import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class KlienciService implements OnInit {
  isFetch = false;
  data = [];
  users = [];
  isLoading = false;

  constructor(private http: HttpClient) {
    //this.users = [];
    this.isLoading = true;
    this.http.get('https://cors-anywhere.herokuapp.com/gtrzaska.cba.pl/auth.php').subscribe(data => {
      this.data.push(data);
      console.log(this.data);
      console.log("-3333---");
      console.log(this.data[0]);
      console.log(this.data[0].length);
      for (let i = 0; i < this.data[0].length; i++) {
        this.users[i] = [];
        this.users[i] = [this.data[0][i].Uzytkownik_id, this.data[0][i].Imie, this.data[0][i].Nazwisko, this.data[0][i].Email, this.data[0][i].Ulica, this.data[0][i].Miasto, this.data[0][i].Kod_pocztowy];
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
    if (this.isFetch) {
      this.http.get('https://cors-anywhere.herokuapp.com/gtrzaska.cba.pl/auth.php').subscribe(data => {
        this.data.push(data);
        for (let i = 0; i < this.data[0].length; i++) {
          this.users[i] = [];
          this.users[i] = [this.data[0][i].Uzytkownik_id, this.data[0][i].Imie, this.data[0][i].Nazwisko, this.data[0][i].Email, this.data[0][i].Ulica, this.data[0][i].Miasto, this.data[0][i].Kod_pocztowy];
        }
        this.isLoading = false;
      }, error => console.error(error));
    }

  }


}
