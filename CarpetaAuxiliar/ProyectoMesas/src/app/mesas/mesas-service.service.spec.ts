import { TestBed } from '@angular/core/testing';

import { MesasServiceService } from './mesas-service.service';

describe('MesasServiceService', () => {
  let service: MesasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
