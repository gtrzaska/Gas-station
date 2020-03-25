import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-klient',
  templateUrl: './klient.component.html',
  styleUrls: ['./klient.component.css']
})
export class KlientComponent implements OnInit {
  @Input() user = [0, '', '', '', '', '', ''];
  @Input() id: number;
  constructor() { }

  ngOnInit(): void {
  }

}
