import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PracownicyDaneComponent} from './pracownicy-dane.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('PracownicyDaneComponent', () => {
  let component: PracownicyDaneComponent;
  let fixture: ComponentFixture<PracownicyDaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PracownicyDaneComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
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
