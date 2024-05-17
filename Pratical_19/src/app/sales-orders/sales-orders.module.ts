import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesOrdersRoutingModule } from './sales-orders-routing.module';
import { SalesOrdersComponent } from './sales-orders.component';
import { SalesOrderListComponent } from './sales-order-list/sales-order-list.component';


@NgModule({
  declarations: [
    SalesOrdersComponent,
    SalesOrderListComponent
  ],
  imports: [
    CommonModule,
    SalesOrdersRoutingModule
  ]
})
export class SalesOrdersModule { }
