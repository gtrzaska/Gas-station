import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pracownik',
  templateUrl: './pracownik.component.html',
  styleUrls: ['./pracownik.component.css']
})
export class PracownikComponent implements OnInit {
  @Input() user = [0, '', '', '', '', '', ''];
  @Input() id: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
