import { Component, OnInit } from '@angular/core';
import { KlienciService } from '../klienci.service';

@Component({
  selector: 'app-klienci-lista',
  templateUrl: './klienci-lista.component.html',
  styleUrls: ['./klienci-lista.component.css']
})
export class KlienciListaComponent implements OnInit {
  public isLoading = false;

  constructor(public klienciService: KlienciService) {
    // this.klienciService.klienci();
    // this.isLoading = klienciService.isLoading.;
  }

  ngOnInit(): void {

  }

  odswierzListe() {
    this.klienciService.klienci();

  }
}
