
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ranking } from 'src/app/shared/models/ranking.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  rankingPorAno() {
    return this.http.get<Ranking[]>(`${environment.APP_API}/ranking?ano=2023`)
  }

  dezMaisEmplacadosAutomoveis() {
    return this.http.get<any[]>(`${environment.APP_API}/dezMaisEmplacadosAutomoveis`)
  }

  dezMaisEmplacadosComerciaisLeves() {
    return this.http.get<any[]>(`${environment.APP_API}/dezMaisEmplacadosComerciaisLeves`)
  }

  emplacadosPorAno() {
    return this.http.get<any[]>(`${environment.APP_API}/emplacadosPorAno`)
  }

}


