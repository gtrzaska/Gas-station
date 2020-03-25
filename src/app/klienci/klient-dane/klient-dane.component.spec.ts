import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlientDaneComponent } from './klient-dane.component';

describe('KlientDaneComponent', () => {
  let component: KlientDaneComponent;
  let fixture: ComponentFixture<KlientDaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlientDaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlientDaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
