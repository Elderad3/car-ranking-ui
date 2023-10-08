

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingTipoComponent } from './ranking-tipo.component';

const routes: Routes = [
  {
    path: '', component: RankingTipoComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankingTipoRoutingModule { }