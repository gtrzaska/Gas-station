import {Component, OnInit} from '@angular/core';
import {RezerwacjaService} from "../rezerwacja.service";

@Component({
  selector: 'app-rezerwacja-lista',
  templateUrl: './rezerwacja-lista.component.html',
  styleUrls: ['./rezerwacja-lista.component.css']
})
export class RezerwacjaListaComponent implements OnInit {
  public moje = false;

  constructor(public rezerwacjaService: RezerwacjaService) {
  }

  ngOnInit(): void {
  }

  odswierzListe() {
    this.rezerwacjaService.rezerwacje();
  }

  onMoje() {
    this.moje = !this.moje;
  }
}
