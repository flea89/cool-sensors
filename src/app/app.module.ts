import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SensorReadComponent } from './sensor-read/sensor-read.component';
import { SensorTableComponent } from './sensor-table/sensor-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SensorReadComponent,
    SensorTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
