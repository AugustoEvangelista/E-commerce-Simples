import { provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ApplicationConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'produtos', component: ProdutosComponent },
      { path: 'sobre', component: SobreComponent },
      { path: 'produto-detalhe/:id', component: ProdutoDetalheComponent },
    ])
  ]
};
