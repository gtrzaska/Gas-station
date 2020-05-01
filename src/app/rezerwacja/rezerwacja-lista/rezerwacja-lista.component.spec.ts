import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RezerwacjaListaComponent} from './rezerwacja-lista.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('RezerwacjaListaComponent', () => {
  let component: RezerwacjaListaComponent;
  let fixture: ComponentFixture<RezerwacjaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RezerwacjaListaComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezerwacjaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
