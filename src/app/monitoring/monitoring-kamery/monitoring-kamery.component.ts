import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-monitoring-kamery',
  templateUrl: './monitoring-kamery.component.html',
  styleUrls: ['./monitoring-kamery.component.css']
})
export class MonitoringKameryComponent implements OnInit {
  kamera = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  zmianaKamery(id) {
    this.kamera = id;
  }

}
