import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DostawyZamowienieComponent} from './dostawy-zamowienie.component';

describe('DostawyZamowienieComponent', () => {
  let component: DostawyZamowienieComponent;
  let fixture: ComponentFixture<DostawyZamowienieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DostawyZamowienieComponent]
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
