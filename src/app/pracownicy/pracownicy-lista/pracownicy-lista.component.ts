import {Component, OnInit} from '@angular/core';
import {PracownicyService} from "../pracownicy.service";

@Component({
  selector: 'app-pracownicy-lista',
  templateUrl: './pracownicy-lista.component.html',
  styleUrls: ['./pracownicy-lista.component.css']
})
export class PracownicyListaComponent implements OnInit {

  constructor(public pracownicyService: PracownicyService) {
  }

  ngOnInit(): void {

  }

  odswierzListe() {
    this.pracownicyService.pracownicy();

  }
}
