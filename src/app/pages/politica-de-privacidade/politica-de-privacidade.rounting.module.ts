
import { PoliticaDePrivacidadeComponent } from './politica-de-privacidade.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: PoliticaDePrivacidadeComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliticaDePrivacidadeRoutingModule { }