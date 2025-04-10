import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'produtos', component: ProdutosComponent},
    { path: 'sobre', component: SobreComponent },
    { path: 'produto-detalhe/:id', component: ProdutoDetalheComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
