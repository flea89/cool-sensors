import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { SensorRead } from '../sensor-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogMapComponent } from '../dialog-map/dialog-map.component';


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
    'location',
  ];
  dataSource: TableVirtualScrollDataSource<SensorRead> = new TableVirtualScrollDataSource<SensorRead>([]);

  @ViewChild(MatSort, {static: true}) sort: MatSort | null = null;

  constructor(
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.dataSource = new TableVirtualScrollDataSource<SensorRead>(this.reads);
    this.dataSource.sort = this.sort;

    // Custom predicate for filtering type or name
    this.dataSource.filterPredicate = (data, filter: string): boolean  => {
      return data.name.toLowerCase().includes(filter) || data.sensor_type.toLowerCase().includes(filter);
    };
  }

  applyFilter(filterValue: string | null): void {
    if (filterValue != null) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }

  seeOnMap(read: SensorRead): void {
    this.dialog.open(DialogMapComponent, {
      data: {
        label: `${read.id} - ${read.name}`,
        marker: {
          lat: read.latitude,
          lng: read.longitude,
        }
      }
    });
  }


}
