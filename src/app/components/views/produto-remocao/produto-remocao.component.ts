import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-produto-remocao',
  templateUrl: './produto-remocao.component.html',
  styleUrls: ['./produto-remocao.component.css']
})
export class ProdutoRemocaoComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ProdutoRemocaoComponent>,
    @Inject(MAT_DIALOG_DATA) public id: string) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }


}
