import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { SensorRead } from '../sensor-service.service';


@Component({
  selector: 'app-sensor-table',
  templateUrl: './sensor-table.component.html',
  styleUrls: ['./sensor-table.component.scss']
})
export class SensorTableComponent implements OnInit {
  @Input() reads!: SensorRead[];

  displayedColumns: string[] = [
    'id',
    'sensor_type',
    'name',
    'reading',
    'reading_ts',
  ];
  dataSource: TableVirtualScrollDataSource<SensorRead> = new TableVirtualScrollDataSource<SensorRead>([]);

  @ViewChild(MatSort, {static: true}) sort: MatSort | null = null;

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource = new TableVirtualScrollDataSource<SensorRead>(this.reads);
    this.dataSource.sort = this.sort;
  }

}