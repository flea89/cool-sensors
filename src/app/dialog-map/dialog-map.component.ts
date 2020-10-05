/// <reference types="@types/googlemaps" />

import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';

export interface MapDialogData {
  label: string;
  marker: google.maps.LatLngLiteral;
}


@Component({
  selector: 'app-dialog-map',
  templateUrl: './dialog-map.component.html',
  styleUrls: ['./dialog-map.component.scss']
})
export class DialogMapComponent {
  apiLoaded?: Observable<boolean>;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  zoom = 10;

  constructor(
    public dialogRef: MatDialogRef<DialogMapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MapDialogData) {
    }

  close(): void {
    this.dialogRef.close();
  }

}
