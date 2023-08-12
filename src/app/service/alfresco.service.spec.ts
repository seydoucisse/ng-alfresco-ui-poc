import { TestBed } from '@angular/core/testing';

import { AlfrescoService } from './alfresco.service';

describe('AlfrescoService', () => {
  let service: AlfrescoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlfrescoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
