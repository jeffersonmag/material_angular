import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Produto } from '../models/produto';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService extends CoreService<Produto> {

  constructor(protected http: HttpClient, protected snackBar: MatSnackBar) {
    super(http, 'http://localhost:3200/api/produtos', snackBar);
   }
}
