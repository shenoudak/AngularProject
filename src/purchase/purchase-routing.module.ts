import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowPurchaseBillComponent } from './show-purchase-bill/show-purchase-bill.component';

const routes: Routes = 
[
  {path:'',component:ShowPurchaseBillComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
