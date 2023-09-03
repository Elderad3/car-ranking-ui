import { Title, Meta } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ErrorService } from '../../../shared/services/error.service';
import { RankingService } from './../ranking.service';
import { Ranking } from 'src/app/shared/models/ranking.model';
import { UtilService } from 'src/app/shared/services/util.service';
import { Ano } from 'src/app/shared/models/ano';
import { Mes } from 'src/app/shared/models/mes';
import { SubSeguimento } from 'src/app/shared/models/subSeguimento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ranking-main',
  templateUrl: './ranking-main.component.html'
})
export class RankingMainComponent implements OnInit {

  ranking: Ranking[] = []
  loadGraficos: boolean = false
  dezPrimeiros: Ranking[] = []
  dataGraficoRanking: any = []
  dataGraficoMarcas: any = []
  rankingPorMarca: any = []
  anos: Ano[] = []
  meses: Mes[] = []
  subseguimentos: SubSeguimento[] = []
  ano: number = new Date().getFullYear()
  mes: number = new Date().getMonth() + 1
  seguimento: number = 1
  subseguimento: number = 1
  loading: boolean = false
  isEmpty: boolean = false
  rankingForm: FormGroup
  titulo: string = 'Ranking Emplacamentos'


  constructor(
    private fb: FormBuilder,
    private rankingService: RankingService,
    private errorService: ErrorService,
    private titleService: Title,
    private metaService: Meta,
    public utilService: UtilService,
    public router: Router) {
    this.rankingForm = this.fb.group({
      ano: [this.ano, Validators.required],
      mes: [this.mes],
      subseguimento: [this.subseguimento]
    });
  }

  ngOnInit() {
    this.titleService.setTitle(this.titulo);
    this.updateMetaTag()
    this.anos = this.utilService.anos
    this.meses = this.utilService.meses
    this.loadSeguimento()
    this.loadSubseguimentos()
    this.rankingPorAnoMesSeguimentoSubseguimento(this.ano, this.mes, this.seguimento, this.subseguimento)
  }

  /**
   * Busca ranking por ano mes seguimento subseguimento
   * @param ano 
   * @param mes 
   * @param seguimento 
   * @param subseguimento 
   */
  rankingPorAnoMesSeguimentoSubseguimento(ano: number, mes: number, seguimento: number, subseguimento: number): void {
    this.loading = !this.loading
    this.rankingService.rankingPorAnoMesSeguimentoSubseguimento(ano, mes, seguimento, subseguimento).pipe(
      take(1)
    ).subscribe((ranking) => {
      this.ranking = ranking;
      this.ranking.length ? this.isEmpty = false : this.isEmpty = true
      this.dezPrimeiros = this.ranking.filter(item => item.posicao <= 10)
      this.rankingPorMarca = this.rankingService.separarRankingPorMarca(this.ranking)
      this.dataGraficoRanking = this.popularGraficoRanking()
      this.dataGraficoMarcas = this.popularGraficoMarcas()
      this.loading = !this.loading
    }, err => {
      this.errorService.handle(err)
    })
  }

  popularGraficoRanking() {
    const dataGrafico: any = []
    this.ranking.forEach(item => {
      dataGrafico.push({
        label: item.modelo,
        valor: item.quantidade
      })
    })
    return dataGrafico
  }

  popularGraficoMarcas() {
    const dataGrafico: any = []
    this.rankingPorMarca.forEach((item: { marca: string; quantidade: number; }) => {
      dataGrafico.push({
        label: item.marca,
        valor: item.quantidade
      })
    })
    return dataGrafico
  }

  buscar() {
    this.rankingPorAnoMesSeguimentoSubseguimento(
      this.rankingForm.value.ano, this.rankingForm.value.mes, this.seguimento, this.rankingForm.value.subseguimento)
  }

  updateMetaTag() {
    this.metaService.updateTag(
      { name: 'description', content: 'Ranking de novos emplacamentos de veículos no Brasil' }
    );
  }

  loadSeguimento(): number {
    if (this.router.url === '/carros') { this.seguimento = 1 }
    else if (this.router.url === '/motos') { this.seguimento = 2 }
    return this.seguimento
  }

  loadSubseguimentos() {
    this.subseguimentos = this.utilService.subSeguimentos
    this.subseguimentos = this.subseguimentos.filter(item => item.seguimento?.value === this.seguimento)
    this.rankingForm.patchValue({ subseguimento: this.subseguimentos[0].value })
  }
}
