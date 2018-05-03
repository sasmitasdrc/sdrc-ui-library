import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './dashboard.routing';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoogleMapComponent } from './charts/google-map/google-map.component';
import { DashboardService } from './services/dashboard.service';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { SpiderChartComponent } from './charts/spider-chart/spider-chart.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';

import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    routing,
    FormsModule,
    AgmCoreModule
  ],
  declarations: [LineChartComponent, DashboardComponent, BarChartComponent, SpiderChartComponent, GoogleMapComponent, DoughnutChartComponent, PieChartComponent],
  exports: [ LineChartComponent],
  providers: [ DashboardService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DashboardModule { }


