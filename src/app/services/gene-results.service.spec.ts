import { TestBed } from '@angular/core/testing';

import { GeneResultsService } from './gene-results.service';

describe('GeneResultsService', () => {
  let service: GeneResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
