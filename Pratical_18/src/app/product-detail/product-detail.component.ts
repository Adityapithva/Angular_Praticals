import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: number | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.productId = + this.route.snapshot.paramMap.get('id');
  }
}
