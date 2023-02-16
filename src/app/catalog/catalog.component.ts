import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  public products!: Product[];

  constructor() {
    this.products = [
      new Product(1, 'produit n°1', false),
      new Product(2, 'produit n°2', false, 10),
      new Product(3, 'produit n°3', true),
      new Product(4, 'produit n°4', true, 30),
    ];
  }

  ngOnInit() {
  }
}
