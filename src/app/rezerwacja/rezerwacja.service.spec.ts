import {TestBed} from '@angular/core/testing';

import {RezerwacjaService} from './rezerwacja.service';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('RezerwacjaService', () => {
  let service: RezerwacjaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    });
    service = TestBed.inject(RezerwacjaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
