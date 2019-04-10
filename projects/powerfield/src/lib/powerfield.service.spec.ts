import { TestBed } from '@angular/core/testing';

import { PowerfieldService } from './powerfield.service';

describe('PowerfieldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PowerfieldService = TestBed.get(PowerfieldService);
    expect(service).toBeTruthy();
  });
});
