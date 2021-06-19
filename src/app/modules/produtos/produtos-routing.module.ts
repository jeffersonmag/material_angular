import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from 'src/app/components/views/produtos/produtos.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: 'novo', loadChildren: () => 
    import("src/app/modules/produto-novo/produto-novo.module")
    .then(m => m.ProdutoNovoModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
