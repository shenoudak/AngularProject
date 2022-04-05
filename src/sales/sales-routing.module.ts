import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReturnSaleBillComponent } from './add-return-sale-bill/add-return-sale-bill.component';
import { AddSaleBillComponent } from './add-sale-bill/add-sale-bill.component';
import { PreviewSaleBillComponent } from './preview-sale-bill/preview-sale-bill.component';

const routes: Routes =
 [
   {path:"",component:AddSaleBillComponent},
   {path:"preview",component:PreviewSaleBillComponent},
   {path:'home/sale/addRetBill',component:AddReturnSaleBillComponent},
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
