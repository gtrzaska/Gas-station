import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DostawyProduktComponent} from './dostawy-produkt.component';

describe('DostawyProduktComponent', () => {
  let component: DostawyProduktComponent;
  let fixture: ComponentFixture<DostawyProduktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DostawyProduktComponent]
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
