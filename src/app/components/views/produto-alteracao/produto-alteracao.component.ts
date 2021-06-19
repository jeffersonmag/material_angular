import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-produto-alteracao',
  templateUrl: './produto-alteracao.component.html',
  styleUrls: ['./produto-alteracao.component.css']
})
export class ProdutoAlteracaoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProdutoAlteracaoComponent>,
    @Inject(MAT_DIALOG_DATA) public produto: Produto) { 
      this.produto = { ...produto };
    }

    categorias: string[] = ['INFORMATICA', 'VESTUARIO', 'ALIMENTACAO', 'HIGIENE', 'CONSTRUCAO'];

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}
