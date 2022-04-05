import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SalesRoutingModule } from './sales-routing.module';
import { AddSaleBillComponent } from './add-sale-bill/add-sale-bill.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material/material.module';
import { HeaderSalesBillComponent } from './header-sales-bill/header-sales-bill.component';
import { PreviewSaleBillComponent } from './preview-sale-bill/preview-sale-bill.component';
import { AddReturnSaleBillComponent } from './add-return-sale-bill/add-return-sale-bill.component';


@NgModule({
  declarations: [
    AddSaleBillComponent,
    HeaderSalesBillComponent,
    PreviewSaleBillComponent,
    AddReturnSaleBillComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [DatePipe],
})

export class SalesModule { }
