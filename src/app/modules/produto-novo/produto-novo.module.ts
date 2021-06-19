import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoNovoRoutingModule } from './produto-novo-routing.module';
import { ProdutoNovoComponent } from '../../components/views/produto-novo/produto-novo.component';


@NgModule({
  declarations: [
    ProdutoNovoComponent
  ],
  imports: [
    CommonModule,
    ProdutoNovoRoutingModule
  ],
  exports: [ ProdutoNovoComponent ]
})
export class ProdutoNovoModule { }
