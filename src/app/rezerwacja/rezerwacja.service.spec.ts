import {TestBed} from '@angular/core/testing';

import {RezerwacjaService} from './rezerwacja.service';

describe('RezerwacjaService', () => {
  let service: RezerwacjaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RezerwacjaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
