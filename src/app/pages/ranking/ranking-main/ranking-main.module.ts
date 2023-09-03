


import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { RankingMainRoutingModule } from './ranking-main.rounting.module';
import { RankingMainComponent } from './ranking-main.component';
import { GraficosModule } from 'src/app/shared/components/graficos/graficos.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RankingMainComponent],
  imports: [
    CommonModule, ReactiveFormsModule, GraficosModule, CoreModule, RouterModule, RankingMainRoutingModule
  ],
  providers: []
})
export class RankingMainModule { }
