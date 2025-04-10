import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {
  produto: any;
  produtos = [
    { id: 1, nome: 'Camisa', preco: 49.99, descricao: 'Camisa 100% algodão', emEstoque: true },
    { id: 2, nome: 'Tênis', preco: 149.99, descricao: 'Tênis esportivo', emEstoque: false },
    { id: 3, nome: 'Boné', preco: 29.99, descricao: 'Boné estiloso', emEstoque: true }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produto = this.produtos.find(p => p.id === id);
  }
}
