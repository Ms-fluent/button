import { TestBed } from '@angular/core/testing';

import { MsButtonService } from './ms-button.service';

describe('MsButtonService', () => {
  let service: MsButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
