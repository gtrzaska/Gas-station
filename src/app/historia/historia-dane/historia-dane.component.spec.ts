import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HistoriaDaneComponent} from './historia-dane.component';

describe('HistoriaDaneComponent', () => {
  let component: HistoriaDaneComponent;
  let fixture: ComponentFixture<HistoriaDaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriaDaneComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaDaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
