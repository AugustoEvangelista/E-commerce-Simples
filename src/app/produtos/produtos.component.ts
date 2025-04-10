import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  produtos = [
    { id: 1, nome: 'Camisa', preco: 49.99, descricao: 'Camisa 100% algodão', emEstoque: true },
    { id: 2, nome: 'Tênis', preco: 149.99, descricao: 'Tênis esportivo', emEstoque: false },
    { id: 3, nome: 'Boné', preco: 29.99, descricao: 'Boné estiloso', emEstoque: true }
  ];

  constructor(private router: Router) {}

  comprar(id: number) {
    this.router.navigate(['/produto-detalhe', id]);
  }
}
