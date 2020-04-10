import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DaneKontaktoweComponent} from './dane-kontaktowe.component';

describe('DaneKontaktoweComponent', () => {
  let component: DaneKontaktoweComponent;
  let fixture: ComponentFixture<DaneKontaktoweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DaneKontaktoweComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaneKontaktoweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
