
import { RankingTipoRoutingModule } from './ranking-tipo.rounting.module';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingTipoComponent } from './ranking-tipo.component';
import { CoreModule } from 'src/app/core/core.module';
import { GraficosModule } from 'src/app/shared/components/graficos/graficos.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RankingTipoComponent],
  imports: [
    CommonModule, GraficosModule, CoreModule, RouterModule, RankingTipoRoutingModule
  ],
  providers: []
})
export class RankingTipoModule { }
