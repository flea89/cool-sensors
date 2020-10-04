import { TestBed } from '@angular/core/testing';

import { SensorsDataService } from './sensor-service.service';

describe('SensorService', () => {
  let service: SensorsDataService;
  let httpClientSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SensorsDataService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the data API', () => {
    service.getSensorReads();
    expect(httpClientSpy.get.calls.count()).toBe(1);
  });
});
