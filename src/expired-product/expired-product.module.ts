import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpiredProductComponent } from './add-expired-product/add-expired-product.component';
import { EditExpiredProductComponent } from './edit-expired-product/edit-expired-product.component';
import { ShowExpiredProductComponent } from './show-expired-product/show-expired-product.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddExpiredProductComponent,
    EditExpiredProductComponent,
    ShowExpiredProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    AddExpiredProductComponent,
    ShowExpiredProductComponent,
    EditExpiredProductComponent
  ]
})
export class ExpiredProductModule { }
