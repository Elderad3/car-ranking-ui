import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { take } from 'rxjs';
import { ErrorService } from 'src/app/shared/services/error.service';
import { Meta, Title } from '@angular/platform-browser';
import { Tipo } from 'src/app/shared/models/tipo';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  dezMaisEmplacadosAuto: any[]
  dataChartEmplacadosAuto: any[]
  dezMaisEmplacadosComerciais: any[]
  dataChartEmplacadosComerciais: any[]
  emplacamentosPorAno: any[]
  dataChartEmplacamentosAno: any[]
  tipos: Tipo[]
  loading: boolean = false

  constructor(private homeService: HomeService, private errorService: ErrorService, private utilService: UtilService,
    private metaService: Meta, private titleService: Title) { }

  ngOnInit(): void {
    this.tipos = this.utilService.tipos
    this.titleService.setTitle('BR Garagem')
    this.metaService.updateTag(
      { name: 'description', content: 'Visão Geral de Emplacamentos de Veículos no Brasil' }
    );
    this.loading = !this.loading
    this.dezMaisEmplacadosAutomoveis()
    this.dezMaisEmplacadosComerciaisLeves()
    this.emplacadosPorAno()
    this.loading = !this.loading
  }

  dezMaisEmplacadosAutomoveis() {
    this.homeService.dezMaisEmplacadosAutomoveis().pipe(
      take(1)
    ).subscribe((d) => {
      this.dezMaisEmplacadosAuto = d
      this.dataChartEmplacadosAuto = d.map(item => ({ label: item.modelo, valor: item.quantidade }))
    }, err => {
      this.errorService.handle(err)
    })
  }

  dezMaisEmplacadosComerciaisLeves() {
    this.homeService.dezMaisEmplacadosComerciaisLeves().pipe(
      take(1)
    ).subscribe((d) => {
      this.dezMaisEmplacadosComerciais = d
      this.dataChartEmplacadosComerciais = d.map(item => ({ label: item.modelo, valor: item.quantidade }))
    }, err => {
      this.errorService.handle(err)
    })

  }

  emplacadosPorAno() {
    this.homeService.emplacadosPorAno().pipe(
      take(1)
    ).subscribe((d) => {
      this.emplacamentosPorAno = d
      this.dataChartEmplacamentosAno = d.map(item => ({ label: item.ano, valor: item.quantidade }))
    }, err => {
      this.errorService.handle(err)
    })

  }
}
