import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MonitoringKameryComponent} from './monitoring-kamery.component';

describe('MonitoringKameryComponent', () => {
  let component: MonitoringKameryComponent;
  let fixture: ComponentFixture<MonitoringKameryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonitoringKameryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringKameryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
