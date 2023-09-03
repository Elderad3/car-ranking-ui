

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingMainComponent } from './ranking-main.component';

const routes: Routes = [
  {
    path: '', component: RankingMainComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankingMainRoutingModule { }