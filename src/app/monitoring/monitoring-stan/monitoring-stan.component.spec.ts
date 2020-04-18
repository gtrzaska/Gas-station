import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MonitoringStanComponent} from './monitoring-stan.component';

describe('MonitoringStanComponent', () => {
  let component: MonitoringStanComponent;
  let fixture: ComponentFixture<MonitoringStanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonitoringStanComponent]
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
