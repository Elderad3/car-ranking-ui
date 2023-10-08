import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { UtilService } from 'src/app/shared/services/util.service';
Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnChanges {

  @Input() data: any
  @Input() titulo: any
  @ViewChild("barChart", { static: true }) elemento: ElementRef
  chart: Chart



  constructor(private utilService: UtilService) {
  }

  ngOnChanges(): void {
    if (this.chart != undefined) {
      this.chart.destroy()
    }
    this.chart = new Chart(this.elemento.nativeElement, {
      type: 'bar',
      data: {
        labels: this.data.map((item: { label: any; }) => item.label),
        datasets: [{
          label: this.titulo,
          data: this.data.map((item: { valor: any; }) => item.valor),
          backgroundColor: '#166a8f',
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            //beginAtZero: true,
            grid: {
              display: true
            },
          },
        }
      }
    });
  }
}
