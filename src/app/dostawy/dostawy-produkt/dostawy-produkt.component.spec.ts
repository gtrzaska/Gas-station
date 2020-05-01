import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DostawyProduktComponent} from './dostawy-produkt.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('DostawyProduktComponent', () => {
  let component: DostawyProduktComponent;
  let fixture: ComponentFixture<DostawyProduktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DostawyProduktComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DostawyProduktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
