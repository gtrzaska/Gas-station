import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PracownikComponent} from './pracownik.component';

describe('PracownikComponent', () => {
  let component: PracownikComponent;
  let fixture: ComponentFixture<PracownikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PracownikComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracownikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
