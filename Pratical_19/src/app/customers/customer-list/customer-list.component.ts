import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  template: `
    <h2>Customer List</h2>
    <ul>
      <li *ngFor="let customer of customers">{{ customer.name }}</li>
    </ul>
  `
})
export class CustomerListComponent implements OnInit {
  customers = [
    { id: 1, name: 'Customer 1' },
    { id: 2, name: 'Customer 2' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
