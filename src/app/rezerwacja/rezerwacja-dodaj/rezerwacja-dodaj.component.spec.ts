import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RezerwacjaDodajComponent} from './rezerwacja-dodaj.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('RezerwacjaDodajComponent', () => {
  let component: RezerwacjaDodajComponent;
  let fixture: ComponentFixture<RezerwacjaDodajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RezerwacjaDodajComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
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
