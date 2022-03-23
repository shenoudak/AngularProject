import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ShowDiscountComponent } from './show-discount/show-discount.component';
import { AddDiscountComponent } from './add-discount/add-discount.component';
import { EditDiscountComponent } from './edit-discount/edit-discount.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowCustomerComponent } from './show-customer/show-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';


@NgModule({
  declarations: [
    ShowDiscountComponent,
    AddDiscountComponent,
    EditDiscountComponent,
    ShowCustomerComponent,
    AddCustomerComponent,
    EditCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
