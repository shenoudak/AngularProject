import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material/material.module';
import { PaymentRoutingModule } from './payment-routing.module';
import { AddPaymentMComponent } from './add-payment-m/add-payment-m.component';
import { ShowPaymentMComponent } from './show-payment-m/show-payment-m.component';
import { EditPaymentMComponent } from './edit-payment-m/edit-payment-m.component';




@NgModule({
  declarations: [
    AddPaymentMComponent,
    ShowPaymentMComponent,
    EditPaymentMComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   MaterialModule
  ]
})
export class PaymentModule { }
