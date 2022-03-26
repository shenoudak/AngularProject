import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPaymentMethodComponent } from './add-payment-method/add-payment-method.component';
import { EditPaymentMethodComponent } from './edit-payment-method/edit-payment-method.component';
import { ShowPaymentMethodComponent } from './show-payment-method/show-payment-method.component';
import { DeletePaymentMethodComponent } from './delete-payment-method/delete-payment-method.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddPaymentMethodComponent,
    EditPaymentMethodComponent,
    ShowPaymentMethodComponent,
    DeletePaymentMethodComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    AddPaymentMethodComponent,
    ShowPaymentMethodComponent,
    EditPaymentMethodComponent,
    DeletePaymentMethodComponent
  ]

})
export class PaymentMethodModule { }
