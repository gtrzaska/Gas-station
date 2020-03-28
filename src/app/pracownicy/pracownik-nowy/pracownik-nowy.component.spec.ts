import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PracownikNowyComponent} from './pracownik-nowy.component';

describe('PracownikNowyComponent', () => {
  let component: PracownikNowyComponent;
  let fixture: ComponentFixture<PracownikNowyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PracownikNowyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracownikNowyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
