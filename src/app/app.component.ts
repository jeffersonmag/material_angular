import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements AfterViewInit {

  @ViewChild('textoCabecalho') texto: any;

  // executado logo após a view ser gerada, e prestes a ser apresentada.
  ngAfterViewInit(): void {
    this.texto.cabecalho = 'Aplicação Produtos - usando ViewChild';
  }
}
