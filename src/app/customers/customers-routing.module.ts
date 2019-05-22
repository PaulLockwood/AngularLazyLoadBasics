import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerXyzzyComponent } from './customer-xyzzy/customer-xyzzy.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent
  },
  {
    path: 'xyzzy',
    component: CustomerXyzzyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
