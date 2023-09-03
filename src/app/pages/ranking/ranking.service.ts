
import { Ranking } from '../../shared/models/ranking.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilService } from 'src/app/shared/services/util.service';
import { ErrorService } from 'src/app/shared/services/error.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private http: HttpClient, private utilService: UtilService, private errorService: ErrorService) { }

  rankingPorAnoMesSeguimentoSubseguimento(ano: number, mes: number, seguimento: number, subseguimento: number): Observable<Ranking[]> {
    return this.http.get<Ranking[]>(`${environment.APP_API}/ranking/${ano}/${mes}/${seguimento}/${subseguimento}`)
  }

  rankingPorAutomovel(modelo: string, subseguimento: any) {
    return this.http.get<Ranking[]>(`${environment.APP_API}/carro/${modelo}/${subseguimento}`)
  }

  separarRankingPorMarca(ranking: Ranking[]) {
    const rankingMarca = []
    const listaAgrupadaPorMarca = this.utilService.agruparLista(ranking, 'marca')
    for (let marca in listaAgrupadaPorMarca) {
      let quantidade = listaAgrupadaPorMarca[marca].reduce(function (a: any, b: any) { return a + b["quantidade"]; }, 0);
      rankingMarca.push({ marca, quantidade });

    }
    rankingMarca.sort((x, y) => { return y.quantidade - x.quantidade })
    return rankingMarca
  };

}


