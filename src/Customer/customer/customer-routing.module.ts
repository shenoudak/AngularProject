import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDiscountComponent } from './add-discount/add-discount.component';
import { EditDiscountComponent } from './edit-discount/edit-discount.component';
import { ShowDiscountComponent } from './show-discount/show-discount.component';

const routes: Routes =
 [
   {path:'',component:ShowDiscountComponent},
   {path:'home/customer/add',component:AddDiscountComponent},
   {path:'home/customer/edit',component:EditDiscountComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
