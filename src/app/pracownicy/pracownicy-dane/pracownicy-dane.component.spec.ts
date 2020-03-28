import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PracownicyDaneComponent} from './pracownicy-dane.component';

describe('PracownicyDaneComponent', () => {
  let component: PracownicyDaneComponent;
  let fixture: ComponentFixture<PracownicyDaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PracownicyDaneComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracownicyDaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
