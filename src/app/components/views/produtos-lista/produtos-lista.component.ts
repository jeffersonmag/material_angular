import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {

  constructor(private service: ProdutosService) { }

  produtos: Produto[] = [];
  listaColunas: string[] = ['codigo', 'descricao', 'unidade', 'preco', 'acao'];

  ngOnInit(): void {
    this.service.getLista().subscribe(res => this.produtos = res);
  }

}
