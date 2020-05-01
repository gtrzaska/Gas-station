import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DaneKontaktoweComponent} from './dane-kontaktowe.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('DaneKontaktoweComponent', () => {
  let component: DaneKontaktoweComponent;
  let fixture: ComponentFixture<DaneKontaktoweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DaneKontaktoweComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
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
