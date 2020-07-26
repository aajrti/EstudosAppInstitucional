import { ProdutoService } from './../produtos.service';
import { Produto } from './../produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styles: [
  ]
})
export class ListaProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  public produtos: Produto[];

  ngOnInit(): void {
    this.produtoService.obterProdutos().subscribe(
      produtos => {
        this.produtos = produtos;
        console.log(produtos);
      },
      error => console.log(error)
    );
  }

}
