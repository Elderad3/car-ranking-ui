
import { Ranking } from '../../shared/models/ranking.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RankingTipoService {

  constructor(private http: HttpClient) { }


  rankingPorTipo(tipo: string) {
    return this.http.get<Ranking[]>(`${environment.APP_API}/tipo/${tipo}`)
  }

}


