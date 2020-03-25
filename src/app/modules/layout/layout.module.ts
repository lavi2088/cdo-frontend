import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './component/home/home.component';
import { CustomerListComponent } from './containers/customer-list/customer-list.component';


@NgModule({
  declarations: [HomeComponent, LayoutComponent, CustomerListComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
