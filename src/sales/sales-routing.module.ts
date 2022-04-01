import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSaleBillComponent } from './add-sale-bill/add-sale-bill.component';

const routes: Routes =
 [
   {path:"",component:AddSaleBillComponent}
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
