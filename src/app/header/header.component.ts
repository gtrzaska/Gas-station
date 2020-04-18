import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {MonitoringService} from "../monitoring/monitoring.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuth = false;
  data = [];
  link = 'http://gtrzaska.cba.pl/';
  public email: string;
  public uprawnienia: number;
  alertMonitoring = false;

  constructor(public authService: AuthService, private http: HttpClient) {
    setInterval(() => {
      this.stanFetch()
    }, 1000);
  }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.isAuth = !user ? false : true;
      if (this.isAuth) {
        this.email = user.email;
        this.uprawnienia = +user.uprawnienia;
        console.log(this.uprawnienia);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.uprawnienia = null;

  }

  stanFetch() {
    let isAlert = false;
    this.data = [];
    this.http.get(this.link + 'monitoring_fetch.php').subscribe(data => {
      this.data.push(data);
      for (let i = 0; i < this.data[0].length; i++) {
        if (this.data[0][i].poziom_paliwa <= 4000) {
          isAlert = true;
        }
      }
      if (isAlert) {
        this.alertMonitoring = true;
      } else {
        this.alertMonitoring = false;
      }
    }, error => console.error(error));
  }
}
