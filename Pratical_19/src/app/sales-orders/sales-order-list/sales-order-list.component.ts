import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-order-list',
  template: `
    <h2>Sales Order List</h2>
    <ul>
      <li *ngFor="let order of orders">Order {{ order.id }}: {{ order.description }}</li>
    </ul>
  `
})
export class SalesOrderListComponent implements OnInit {
  orders = [
    { id: 1, description: 'Order 1 Description' },
    { id: 2, description: 'Order 2 Description' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
