import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth/auth.service';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data = [];

  constructor(private authService: AuthService, private http: HttpClient) {
/*
    this.http.get('https://cors-anywhere.herokuapp.com/gtrzaska.cba.pl/klienci_fetch.php').subscribe(data => {
      this.data.push(data);
      console.log(this.data);


    }, error => console.error(error));
*/

    /*   this.http.get('http://localhost:7777/pzesp/klienci_fetch.php').subscribe(data => {
          this.data.push(data);
          console.log(this.data);


        }, error => console.error(error));*/
  }


  ngOnInit() {
    this.authService.autoLogin();

  }
}
