import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { ProdutoAlteracaoComponent } from '../produto-alteracao/produto-alteracao.component';
import { ProdutoRemocaoComponent } from '../produto-remocao/produto-remocao.component';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {

  constructor(private service: ProdutosService, private matDialog: MatDialog) { }

  produtos: Produto[] = [];
  produto!: Produto;
  listaColunas: string[] = ['codigo', 'descricao', 'unidade', 'preco', 'categoria', 'acao'];

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.service.getLista().subscribe(res => this.produtos = res);
  }

  openDialog(produto: Produto): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = produto;

    const dialogRef = this.matDialog.open(ProdutoAlteracaoComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.produto = res;
        this.service.putItem(this.produto, this.produto._id as string)
          .subscribe(() => this.listar());
      }
    })
  }

  openDialogRemocao(id: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = id;

    const dialogRef = this.matDialog.open(ProdutoRemocaoComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.produto = res;
        this.service.deleteItem(id as string)
          .subscribe(() => this.listar());
      }
    })
  }

}
