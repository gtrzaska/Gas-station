import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PracownicyListaComponent} from './pracownicy-lista.component';

describe('PracownicyListaComponent', () => {
  let component: PracownicyListaComponent;
  let fixture: ComponentFixture<PracownicyListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PracownicyListaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracownicyListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
