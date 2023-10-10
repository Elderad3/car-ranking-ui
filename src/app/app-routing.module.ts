import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const ROUTES: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ranking_por_ano_e_mes', loadChildren: () => import('./pages/ranking/ranking-main/ranking-main.module').then(m => m.RankingMainModule) },
  // { path: 'motos', loadChildren: () => import('./pages/ranking/ranking-main/ranking-main.module').then(m => m.RankingMainModule) },
  { path: 'carro/:id/:subseguimento', loadChildren: () => import('./pages/ranking/ranking-detail/ranking-detail.module').then(m => m.RankingDetailModule) },
  { path: 'mais_emplacados/:tipo', loadChildren: () => import('./pages/ranking-tipo/ranking-tipo.module').then(m => m.RankingTipoModule) },

  { path: 'termos-de-uso', loadChildren: () => import('./pages/termos-de-uso/termos-de-uso.module').then(m => m.TermosDeUsoModule) },
  { path: 'politica-de-privacidade', loadChildren: () => import('./pages/politica-de-privacidade/politica-de-privacidade.module').then(m => m.PoliticaDePrivacidadeModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
