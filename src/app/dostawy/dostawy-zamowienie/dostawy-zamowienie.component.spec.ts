import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DostawyZamowienieComponent} from './dostawy-zamowienie.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('DostawyZamowienieComponent', () => {
  let component: DostawyZamowienieComponent;
  let fixture: ComponentFixture<DostawyZamowienieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DostawyZamowienieComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DostawyZamowienieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
