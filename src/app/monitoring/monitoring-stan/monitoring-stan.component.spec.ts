import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MonitoringStanComponent} from './monitoring-stan.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('MonitoringStanComponent', () => {
  let component: MonitoringStanComponent;
  let fixture: ComponentFixture<MonitoringStanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonitoringStanComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringStanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
