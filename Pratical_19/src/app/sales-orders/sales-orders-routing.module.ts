import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesOrderListComponent } from './sales-order-list/sales-order-list.component';

const routes: Routes = [
  { path: '', component: SalesOrderListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesOrdersRoutingModule { }
