import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { TreeTableModule } from 'primeng/treetable';
import { ProgressBarModule } from 'primeng/progressbar';
import { FusionChartsModule } from "angular-fusioncharts";
import { HttpClientModule}from "@angular/common/http";
import { TableModule } from 'primeng/table';

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
FusionChartsModule.fcRoot(FusionCharts, Widgets, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ChartModule,
    NgApexchartsModule,
    TreeTableModule,
    ProgressBarModule,
    FusionChartsModule,
    HttpClientModule,
    TableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
