import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaxComponent } from './add-tax/add-tax.component';
import { EditTaxComponent } from './edit-tax/edit-tax.component';
import { ShowTaxComponent } from './show-tax/show-tax.component';

const routes: Routes = 
[
  {path:'',component:ShowTaxComponent},
  {path:'home/tax/addTax',component:AddTaxComponent},
  {path:'home/tax/editTax',component:EditTaxComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxesRoutingModule { }
