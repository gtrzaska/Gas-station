import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PracownikNowyComponent} from './pracownik-nowy.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('PracownikNowyComponent', () => {
  let component: PracownikNowyComponent;
  let fixture: ComponentFixture<PracownikNowyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PracownikNowyComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
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
