import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-historia-dane',
  templateUrl: './historia-dane.component.html',
  styleUrls: ['./historia-dane.component.css']
})
export class HistoriaDaneComponent implements OnInit {
  @Input() transakcja = [0, '', '', '', '', '', ''];
  @Input() id: number;
  isClicked = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
