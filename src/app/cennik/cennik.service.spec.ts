import {TestBed} from '@angular/core/testing';

import {CennikService} from './cennik.service';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('CennikService', () => {
  let service: CennikService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    });
    service = TestBed.inject(CennikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
