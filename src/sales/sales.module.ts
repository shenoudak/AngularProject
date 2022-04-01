import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { AddSaleBillComponent } from './add-sale-bill/add-sale-bill.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material/material.module';
import { HeaderSalesBillComponent } from './header-sales-bill/header-sales-bill.component';


@NgModule({
  declarations: [
    AddSaleBillComponent,
    HeaderSalesBillComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class SalesModule { }
