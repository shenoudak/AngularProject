import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPaymentMComponent } from './add-payment-m/add-payment-m.component';
import { EditPaymentMComponent } from './edit-payment-m/edit-payment-m.component';
import { ShowPaymentMComponent } from './show-payment-m/show-payment-m.component';

const routes: Routes =
 [
{path:'home/payment/add',component:AddPaymentMComponent},
{path:'home/payment/edit',component:EditPaymentMComponent},
{path:'home/payment/show',component:ShowPaymentMComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
