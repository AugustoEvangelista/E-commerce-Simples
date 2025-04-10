import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/home">Home</a> |
      <a routerLink="/produtos">Produtos</a> |
      <a routerLink="/sobre">Sobre Nós</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      padding: 10px;
      background-color: #eee;
    }
    nav a {
      margin-right: 10px;
    }
  `]
})
export class AppComponent {}
