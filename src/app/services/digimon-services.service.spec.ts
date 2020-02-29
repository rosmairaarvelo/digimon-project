import { TestBed } from '@angular/core/testing';

import { DigimonServicesService } from './digimon-services.service';

describe('DigimonServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DigimonServicesService = TestBed.get(DigimonServicesService);
    expect(service).toBeTruthy();
  });
});
