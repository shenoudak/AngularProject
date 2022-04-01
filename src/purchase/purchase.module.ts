import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { ShowPurchaseBillComponent } from './show-purchase-bill/show-purchase-bill.component';
import { HeaderPurchaseBillComponent } from './header-purchase-bill/header-purchase-bill.component';
import { MaterialModule } from 'src/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBillComponent } from './add-bill/add-bill.component';


@NgModule({
  declarations: [
    ShowPurchaseBillComponent,
    HeaderPurchaseBillComponent,
    AddBillComponent
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
   
  ]
  
})
export class PurchaseModule { }
