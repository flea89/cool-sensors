import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SensorTableComponent } from './sensor-table/sensor-table.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';

@NgModule({
  declarations: [
    AppComponent,
    SensorTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ScrollingModule,
    MatTableModule,
    MatSortModule,
    TableVirtualScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
