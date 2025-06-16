import { TestBed } from '@angular/core/testing';

import { EmployeeAsgnService } from './employee-asgn.service';

describe('EmployeeAsgnService', () => {
  let service: EmployeeAsgnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeAsgnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
