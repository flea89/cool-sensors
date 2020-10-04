import { Component, Input, OnInit } from '@angular/core';
import { SensorRead } from '../sensor-service.service';


@Component({
  selector: 'app-sensor-read',
  templateUrl: './sensor-read.component.html',
  styleUrls: ['./sensor-read.component.scss']
})
export class SensorReadComponent implements OnInit {
  @Input() read!: SensorRead;

  constructor() { }

  ngOnInit(): void {
  }

}
