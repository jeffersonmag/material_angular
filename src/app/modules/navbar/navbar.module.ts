import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from '../../components/modelos/navbar/navbar.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeModule } from '../home/home.module';
import { ProdutosModule } from '../produtos/produtos.module';

import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    MatSidenavModule,
    MatListModule,
    HomeModule,
    ProdutosModule,
    MatSnackBarModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
