import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoAlteracaoRoutingModule } from './produto-alteracao-routing.module';
import { ProdutoAlteracaoComponent } from '../../components/views/produto-alteracao/produto-alteracao.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ProdutoAlteracaoComponent
  ],
  imports: [
    CommonModule,
    ProdutoAlteracaoRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule
  ],
  exports: [
    ProdutoAlteracaoComponent
  ]
})
export class ProdutoAlteracaoModule { }
