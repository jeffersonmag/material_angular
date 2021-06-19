import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosListaRoutingModule } from './produtos-lista-routing.module';
import { ProdutosListaComponent } from '../../components/views/produtos-lista/produtos-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import { MatDialogModule } from '@angular/material/dialog';
import { ProdutoAlteracaoModule } from '../produto-alteracao/produto-alteracao.module';
import { ProdutoRemocaoModule } from '../produto-remocao/produto-remocao.module';


@NgModule({
  declarations: [
    ProdutosListaComponent
  ],
  imports: [
    CommonModule,
    ProdutosListaRoutingModule,
    ProdutoAlteracaoModule,
    ProdutoRemocaoModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule
  ],
  exports: [ ProdutosListaComponent ]
})
export class ProdutosListaModule { }
