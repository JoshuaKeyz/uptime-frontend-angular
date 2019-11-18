import { TestBed } from '@angular/core/testing';

import { IsLoginGuardService } from './is-login-guard.service';

describe('IsLoginGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsLoginGuardService = TestBed.get(IsLoginGuardService);
    expect(service).toBeTruthy();
  });
});
