import {Component, OnInit} from '@angular/core';
import {HistoriaService} from "./historia.service";
import {style, state, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity: 0}),
        animate(130, style({opacity: 1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(130, style({opacity: 0}))
      ])
    ])
  ]
})
export class HistoriaComponent implements OnInit {
  wybor: number = null;
  obecny = false;

  constructor(public historiaService: HistoriaService) {
    this.historiaService.historiaLadowanie(false);
  }

  ngOnInit(): void {
  }

  odswierzListe() {
    this.historiaService.historiaLadowanie(this.obecny);
  }

  obcMiesiac() {
    this.obecny = !this.obecny;
    if (this.obecny) {
      this.historiaService.historiaLadowanie(this.obecny);
    } else {
      this.historiaService.historiaLadowanie(this.obecny);
    }
  }

  transakcjaClick(i: number) {
    if (this.wybor != i) {
      this.wybor = i;
    } else if (this.wybor === i) {
      this.wybor = null;
    }
  }

}
