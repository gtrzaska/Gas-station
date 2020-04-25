import {Component, OnInit} from '@angular/core';
import {CennikService} from "../../cennik/cennik.service";
import {MonitoringService} from "../../monitoring/monitoring.service";
import {NgForm} from "@angular/forms";
import {DostawyService} from "../dostawy.service";

@Component({
  selector: 'app-dostawy-produkt',
  templateUrl: './dostawy-produkt.component.html',
  styleUrls: ['./dostawy-produkt.component.css']
})
export class DostawyProduktComponent implements OnInit {
  selected: number;
  max = 0;
  ile = 0;

  constructor(public cennikService: CennikService, public monitoringService: MonitoringService, private dostawyService: DostawyService) {
  }

  ngOnInit(): void {
  }

  onSelect(i: any) {
    this.selected = i;
    this.ile = 1;
    if (i > 3) {
      this.max = 10000;
    } else {
      this.max = 30000 - +this.monitoringService.stan[i][2];
    }
  }

  iloscPopraw(ilosc: number) {
    console.log('il: ' + ilosc + ' - max: ' + this.max);
    if (ilosc < 0) {
      this.ile = 1;
    } else if (ilosc > this.max) {
      this.ile = this.max;
    }
  }

  iloscMax() {
    this.ile = this.max;
  }

  dodaj(f: NgForm) {
    this.dostawyService.dodajDoZamowienia(this.cennikService.cennik[this.selected][0], this.cennikService.cennik[this.selected][1], f.value.ilosc);
  }
}
