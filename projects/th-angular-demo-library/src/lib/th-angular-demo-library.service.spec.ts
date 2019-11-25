import { TestBed } from '@angular/core/testing';

import { ThAngularDemoLibraryService } from './th-angular-demo-library.service';

describe('ThAngularDemoLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThAngularDemoLibraryService = TestBed.get(ThAngularDemoLibraryService);
    expect(service).toBeTruthy();
  });
});
