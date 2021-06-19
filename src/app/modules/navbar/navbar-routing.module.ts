import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/views/home/home.component';
import { ProdutosComponent } from 'src/app/components/views/produtos/produtos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', loadChildren: () => 
    import('../../modules/produtos/produtos.module')
    .then(m => m.ProdutosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
