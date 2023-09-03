import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const ROUTES: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'carros', loadChildren: () => import('./pages/ranking/ranking-main/ranking-main.module').then(m => m.RankingMainModule) },
  { path: 'motos', loadChildren: () => import('./pages/ranking/ranking-main/ranking-main.module').then(m => m.RankingMainModule) },
  { path: 'carro/:id/:subseguimento', loadChildren: () => import('./pages/ranking/ranking-detail/ranking-detail.module').then(m => m.RankingDetailModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
