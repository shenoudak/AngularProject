import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerTypeComponent } from './add-customer-type/add-customer-type.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddDiscountComponent } from './add-discount/add-discount.component';
import { EditCustomerTypeComponent } from './edit-customer-type/edit-customer-type.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { EditDiscountComponent } from './edit-discount/edit-discount.component';
import { ShowCustomerTypeComponent } from './show-customer-type/show-customer-type.component';
import { ShowCustomerComponent } from './show-customer/show-customer.component';
import { ShowDiscountComponent } from './show-discount/show-discount.component';
const routes: Routes =
 [
   {path:'',component:ShowCustomerComponent},
   {path:'home/customer/editDiscount',component:EditDiscountComponent},
   {path:'home/customer/addCustomer',component:AddCustomerComponent},
   {path:'home/customer/showDiscount',component:ShowDiscountComponent},
   {path:'home/customer/addDiscount',component:AddDiscountComponent},
   {path:'home/customer/editCustomer',component:EditCustomerComponent},
   {path:'home/customer/customerType',component:ShowCustomerTypeComponent},
   {path:'home/customer/addCustomerType',component:AddCustomerTypeComponent},
   {path:'home/customer/editCustomerType',component:EditCustomerTypeComponent},
   

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
