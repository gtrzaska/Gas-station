import {Component, OnInit} from '@angular/core';
import {DostawyService} from "../dostawy.service";

@Component({
  selector: 'app-dostawy-zamowienie',
  templateUrl: './dostawy-zamowienie.component.html',
  styleUrls: ['./dostawy-zamowienie.component.css']
})
export class DostawyZamowienieComponent implements OnInit {

  constructor(public dostawyService: DostawyService) {
  }

  ngOnInit(): void {
  }

  wyczysc() {
    this.dostawyService.wyczysc();
  }
}
