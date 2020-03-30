import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RezerwacjaDodajComponent} from './rezerwacja-dodaj.component';

describe('RezerwacjaDodajComponent', () => {
  let component: RezerwacjaDodajComponent;
  let fixture: ComponentFixture<RezerwacjaDodajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RezerwacjaDodajComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezerwacjaDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
