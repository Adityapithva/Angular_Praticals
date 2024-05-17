import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductService } from '../product.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

interface Product {
  id: number;
  name: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  searchControl = new FormControl();
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.productService.searchProducts(query))
    ).subscribe(products => this.products = products);
  }
}
