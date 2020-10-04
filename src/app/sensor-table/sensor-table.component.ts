import { Component, Input, OnInit } from '@angular/core';
import { SensorRead } from '../sensor-service.service';
import { SensorReadComponent } from '../sensor-read/sensor-read.component';


@Component({
  selector: 'app-sensor-table',
  templateUrl: './sensor-table.component.html',
  styleUrls: ['./sensor-table.component.scss']
})
export class SensorTableComponent implements OnInit {
  @Input() reads: SensorRead[] | null = null;
  headers: string[] = [
    'Id',
    'Type',
    'Name',
    'Value',
    'Date',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
