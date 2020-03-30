import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RezerwacjaListaComponent} from './rezerwacja-lista.component';

describe('RezerwacjaListaComponent', () => {
  let component: RezerwacjaListaComponent;
  let fixture: ComponentFixture<RezerwacjaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RezerwacjaListaComponent]
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
