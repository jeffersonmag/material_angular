import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from '../../components/views/produtos/produtos.component';
import { MatButtonModule } from '@angular/material/button'
import { ProdutosListaModule } from '../produtos-lista/produtos-lista.module';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoNovoModule } from '../produto-novo/produto-novo.module';


@NgModule({
  declarations: [
    ProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    MatButtonModule,
    ProdutosListaModule,
    HttpClientModule,
    ProdutoNovoModule
  ],
  exports: [ ProdutosComponent ]
})
export class ProdutosModule { }
