
import { CommonModule, registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';



registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BarChartComponent,
    DoughnutChartComponent,
    LineChartComponent
  ],
  exports: [
    BarChartComponent,
    DoughnutChartComponent,
    LineChartComponent
  ],
})
export class GraficosModule { }