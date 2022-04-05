import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PurchaseRoutingModule } from './purchase-routing.module';
import { ShowPurchaseBillComponent } from './show-purchase-bill/show-purchase-bill.component';
import { HeaderPurchaseBillComponent } from './header-purchase-bill/header-purchase-bill.component';
import { MaterialModule } from 'src/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBillComponent } from './add-bill/add-bill.component';
import { AddPurchaseReturnBillComponent } from './add-purchase-return-bill/add-purchase-return-bill.component';


@NgModule({
  declarations: [
    ShowPurchaseBillComponent,
    HeaderPurchaseBillComponent,
    AddBillComponent,
    AddPurchaseReturnBillComponent
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
   
  ],
  providers: [DatePipe],
})
export class PurchaseModule { }
