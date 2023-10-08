import { CoreModule } from '../../core/core.module';
import { TermosDeUsoRoutingModule } from './termos-de-uso.rounting.module';
import { TermosDeUsoComponent } from './termos-de-uso.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [TermosDeUsoComponent],
  imports: [
    CommonModule, CoreModule, RouterModule, TermosDeUsoRoutingModule
  ],
  providers: []
})
export class TermosDeUsoModule { }
