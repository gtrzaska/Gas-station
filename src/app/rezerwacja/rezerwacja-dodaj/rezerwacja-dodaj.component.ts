import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RezerwacjaService} from "../rezerwacja.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-rezerwacja-dodaj',
  templateUrl: './rezerwacja-dodaj.component.html',
  styleUrls: ['./rezerwacja-dodaj.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RezerwacjaDodajComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  date: any;

  constructor(public rezerwacjaService: RezerwacjaService) {
    const rok = new Date().getFullYear();
    const miesiac = new Date().getMonth();
    const dzien = new Date().getDate();
    console.log(rok + " - " + miesiac + " - " + dzien);
    this.minDate = new Date(rok, miesiac, dzien);
    this.maxDate = new Date(rok, miesiac + 1, dzien);
  }

  ngOnInit(): void {
  }

  dodaj(form: NgForm) {
    let d = new Date(form.value.data);
    let m = +d.getMonth() + 1
    let date = d.getFullYear() + '-' + m + '-' + d.getDate();
    // console.log(data._validSelected.toString());
    console.log(date);
    this.rezerwacjaService.dodajRezerwacje(form.value.email, form.value.godzina, date)
  }

}
