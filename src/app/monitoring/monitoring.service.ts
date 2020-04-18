import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MonitoringService {

  link = 'http://gtrzaska.cba.pl/';
  isLoading = false;
  data = [];
  stan = [];
  alert = false;

  constructor(private http: HttpClient, private router: Router) {
    this.stanFetch();
  }

  stanFetch() {
    this.isLoading = true;
    this.stan = [];
    this.data = [];
    this.http.get(this.link + 'monitoring_fetch.php').subscribe(data => {
      this.data.push(data);
      console.log(this.data);
      for (let i = 0; i < this.data[0].length; i++) {
        this.stan[i] = [];
        this.stan[i] = [this.data[0][i].id, this.data[0][i].zbiornik, this.data[0][i].poziom_paliwa, this.data[0][i].cisnienie, this.data[0][i].temperatura];
        if (this.data[0][i].poziom_paliwa <= 4000) {
          this.alert = true;
        }
      }
      this.isLoading = false;
    }, error => console.error(error));
  }
}
