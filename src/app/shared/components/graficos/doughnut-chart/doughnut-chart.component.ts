import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { Chart, registerables, ChartType } from 'chart.js';
import { UtilService } from 'src/app/shared/services/util.service'

Chart.register(...registerables);

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html'
})
export class DoughnutChartComponent implements OnChanges {

  @Input() data: any
  @Input() titulo: any
  @ViewChild("doughnutChart", { static: true }) elemento: ElementRef
  chart: Chart


  constructor(private utilService: UtilService) { }

  ngOnChanges(): void {
    if (this.chart != undefined) {
      this.chart.destroy()
    }
    this.chart = new Chart(this.elemento.nativeElement, {
      type: 'doughnut' as ChartType,
      data: {
        labels: this.data.map((item: { label: string; }) => item.label),
        datasets: [{
          label: this.titulo,
          data: this.data.map((item: { valor: number; }) => item.valor),
          backgroundColor: this.utilService.CHART_COLLORS.map(item => item),
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: { display: true, position: 'top' }
        },
        scales: {
          x: {
            display: false,
            grid: {
              display: false
            }
          },
          y: {
            display: false,
            grid: {
              display: false
            },
          },
        }
      }
    });
  }

}
