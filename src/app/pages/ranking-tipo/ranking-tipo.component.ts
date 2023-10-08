import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { ErrorService } from 'src/app/shared/services/error.service';
import { UtilService } from 'src/app/shared/services/util.service';
import { Meta, Title } from '@angular/platform-browser';
import { RankingTipoService } from './ranking-tipo.service';
import { Tipo } from 'src/app/shared/models/tipo';

@Component({
  selector: 'app-ranking-tipo',
  templateUrl: './ranking-tipo.component.html'
})
export class RankingTipoComponent implements OnInit, OnDestroy {

  tipos: Tipo[]
  tipo: any
  loading: boolean = false
  ranking: any[] = [];
  dataGraficoRankingQuantidade: any = []
  dataGraficoRankingPosicao: any = []
  titulo: string
  subscription: Subscription


  constructor(private route: ActivatedRoute, private rankingTipoService: RankingTipoService,
    private errorService: ErrorService, private location: Location,
    public utilService: UtilService,
    private titleService: Title,
    private metaService: Meta,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.tipos = this.utilService.tipos
    let param: any = this.route.snapshot.paramMap.get('tipo')
    console.log(param)
    this.tipo = this.tipos.filter(tipo => tipo.chave === param)
    console.log(this.tipo)
    this.rankingPorTipo(param)

    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let param: any = this.route.snapshot.paramMap.get('tipo')
        console.log(param)
        this.tipo = this.tipos.filter(tipo => tipo.chave === param)
        this.rankingPorTipo(param)
      } else {

      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    console.log("Componente destruído")
  }

  /**
 * Busca ranking com base no carro
 * @param ano 
 * @param mes 
 */
  rankingPorTipo(tipo: string): void {
    this.loading = !this.loading
    this.rankingTipoService.rankingPorTipo(tipo).pipe(
      take(1)
    ).subscribe((ranking) => {
      this.ranking = ranking;
      this.atualizarTituloEMetaTag()
      this.dataGraficoRankingQuantidade = this.ranking.map(item => ({ label: `${item.marca}/${item.modelo}`, valor: item.total }))
      this.loading = !this.loading
    }, err => {
      this.errorService.handle(err)
    })
  }

  voltar() {
    this.location.back();
  }

  atualizarTituloEMetaTag() {
    this.titulo = ` ${this.tipo[0].nome} Mais Emplacados`
    this.titleService.setTitle(this.titulo);
    this.metaService.updateTag({ name: 'description', content: `${this.tipo[0].nome} Mais Emplacados` });
  }



}
