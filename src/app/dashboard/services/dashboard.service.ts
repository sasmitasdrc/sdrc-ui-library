import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GoogleMapModel } from '../models/google-map.model';
import { LineChartModel } from '../models/line-chart.model';
import { SpiderChartModel } from '../models/spider-chart.model';
import { DonutChartModel } from '../models/donut-chart.model';

@Injectable()
export class DashboardService {

  spiderData: any;
  constructor(private httpClient: HttpClient) { }
  getSpiderChart(){
    return  this.httpClient.get<SpiderChartModel>('assets/spiderData.json')
  }
  getMapData(){
    return this.httpClient.get<GoogleMapModel[]>('assets/mapData.json')
  }  
  getBarChartData(){
    return this.httpClient.get('assets/spiderData.json')
  }
  getLineChartData(){
    return this.httpClient.get<LineChartModel[]>('assets/lineChartData.json');
  }
  getDonutChartData(){
    return this.httpClient.get<DonutChartModel>('assets/donutChartData.json');
  }
}