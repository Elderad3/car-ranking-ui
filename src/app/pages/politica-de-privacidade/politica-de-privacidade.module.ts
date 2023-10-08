import { CoreModule } from '../../core/core.module';
import { PoliticaDePrivacidadeRoutingModule } from './politica-de-privacidade.rounting.module';
import { PoliticaDePrivacidadeComponent } from './politica-de-privacidade.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PoliticaDePrivacidadeComponent],
  imports: [
    CommonModule, CoreModule, RouterModule, PoliticaDePrivacidadeRoutingModule,
  ],
  providers: []
})
export class PoliticaDePrivacidadeModule { }
