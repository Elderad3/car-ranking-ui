
import { RankingDetailRoutingModule } from './ranking-detail.rounting.module';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingDetailComponent } from './ranking-detail.component';
import { CoreModule } from 'src/app/core/core.module';
import { GraficosModule } from 'src/app/shared/components/graficos/graficos.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RankingDetailComponent],
  imports: [
    CommonModule, GraficosModule, CoreModule, RouterModule, RankingDetailRoutingModule
  ],
  providers: []
})
export class RankingDetailModule { }
