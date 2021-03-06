import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoNovoRoutingModule } from './produto-novo-routing.module';
import { ProdutoNovoComponent } from '../../components/views/produto-novo/produto-novo.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProdutoNovoComponent
  ],
  imports: [
    CommonModule,
    ProdutoNovoRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [ ProdutoNovoComponent ]
})
export class ProdutoNovoModule { }
