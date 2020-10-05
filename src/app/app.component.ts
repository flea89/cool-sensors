import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SensorRead, SensorsDataService } from './sensor-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Cool sensors';
  sensorsReads$: Observable<SensorRead[]>;

  constructor(
    private sensorDataService: SensorsDataService,
  ) {
    this.sensorsReads$ = this.sensorDataService.getSensorReads();
  }
}
