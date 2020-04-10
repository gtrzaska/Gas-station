import {TestBed} from '@angular/core/testing';

import {CennikService} from './cennik.service';

describe('CennikService', () => {
  let service: CennikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CennikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
