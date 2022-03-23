import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddDiscountComponent } from './add-discount/add-discount.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { EditDiscountComponent } from './edit-discount/edit-discount.component';
import { ShowCustomerComponent } from './show-customer/show-customer.component';
import { ShowDiscountComponent } from './show-discount/show-discount.component';
const routes: Routes =
 [
   {path:'',component:ShowCustomerComponent},
   {path:'home/customer/addDiscount',component:AddDiscountComponent},
   {path:'home/customer/editDiscount',component:EditDiscountComponent},
   {path:'home/customer/addCustomer',component:AddCustomerComponent},
   {path:'home/customer/editCustomer',component:EditCustomerComponent},
   {path:'home/customer/showDiscount',component:ShowDiscountComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
