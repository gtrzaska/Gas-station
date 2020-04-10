import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import {CennikService} from "./cennik.service";

@Component({
  selector: 'app-cennik',
  templateUrl: './cennik.component.html',
  styleUrls: ['./cennik.component.css']
})
export class CennikComponent implements OnInit {
  uprawnienia: string;

  constructor(public authService: AuthService, public cennikService: CennikService) {
  }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      if (user) {
        this.uprawnienia = user.uprawnienia;
      }
    });
  }


  dodajProdukt() {
    const nazwa = (<HTMLInputElement>document.getElementById('nowyNazwa')).value;
    const cena = (<HTMLInputElement>document.getElementById('nowyCena')).value;

    if (nazwa != '' && cena != '') {
      console.log(nazwa + " " + cena);
      this.cennikService.dodajProdukt(nazwa, cena)
    }
  }

  usunProdukt(id) {
    this.cennikService.usunProdukt(id)
  }
}
