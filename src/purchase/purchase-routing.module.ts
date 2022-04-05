import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBillComponent } from './add-bill/add-bill.component';
import { AddPurchaseReturnBillComponent } from './add-purchase-return-bill/add-purchase-return-bill.component';
import { ShowPurchaseBillComponent } from './show-purchase-bill/show-purchase-bill.component';

const routes: Routes = 
[
  {path:'home/purchase/preview',component:ShowPurchaseBillComponent},
  {path:'home/purchase/add',component:AddBillComponent},
  {path:'home/purchase/addRetBill',component:AddPurchaseReturnBillComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
