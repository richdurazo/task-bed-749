import { TestBed, inject } from '@angular/core/testing';

import { DateUtilsService } from './date-utils.service';

describe('DateUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateUtilsService]
    });
  });

  it('should ...', inject([DateUtilsService], (service: DateUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
