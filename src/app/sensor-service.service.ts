import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface SensorRead {
  id: string; // UUID for this sensor reading
  sensor_type: string; // type of the sensor
  name: string; // type of data read by sensor
  range_l: number; // measuring range lower bound
  range_u: number; // measuring range upper bound
  reading: number; // actual value being read
  unit: string; // measurement unit
  reading_ts: string; // when the reading was taken

  // For the provided usecase, it's not required,
  // but the Box could/should be its own entity.
  box_id: string; // UUID of the box
  longitude: string; // location of the box (lon)
  latitude: string; // location of the box (lat)
}

@Injectable({
  providedIn: 'root'
})
export class SensorsDataService {
  endpoint = 'test.json';

  constructor(
    private http: HttpClient,
    ) {}

  /**
   * Fetch sensor data from fake backend.
   */
  getSensorReads(): Observable<SensorRead[]> {
    return this.http.get<SensorRead[]>(this.endpoint);
  }
}
