import {Component, OnInit} from '@angular/core';
import {MonitoringService} from "../monitoring.service";

@Component({
  selector: 'app-monitoring-stan',
  templateUrl: './monitoring-stan.component.html',
  styleUrls: ['./monitoring-stan.component.css']
})
export class MonitoringStanComponent implements OnInit {
  public stan = 1;
  procent = 0.0;

  constructor(public monitoringService: MonitoringService) {

  }

  ngOnInit(): void {
    if (!this.monitoringService.isLoading) {
      this.stan = 1;
      this.procentPaliwa(this.stan);
    }
  }

  procentPaliwa(zbiornik) {
    this.stan = zbiornik;
    //this.procent = (this.monitoringService.stan[zbiornik-1][2]/30000) * 100;
    // console.log(this.procent)
  }

}
