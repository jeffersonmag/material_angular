import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.css']
})
export class ProdutoNovoComponent implements OnInit {

  constructor(private service: ProdutosService, private router: Router) { }

  public produto!: Produto;
  categorias: string[] = ['INFORMATICA', 'VESTUARIO', 'ALIMENTACAO', 'HIGIENE', 'CONSTRUCAO']

  ngOnInit(): void {
    this.produto = { codigo: 0, descricao: '', unidade: '', categoria: 'INFORMATICA', preco: 0 }
  }

  incluirProduto(): void {
    this.service.postItem(this.produto).subscribe(() => {
      this.service.showMessage('Produto incluído com sucesso', false);
      this.router.navigate(['/produtos']);
    });
  }

}
