import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ShowAllPurchaseBillComponent } from './show-all-purchase-bill/show-all-purchase-bill.component';
import { PurcaseBillComponent } from './purcase-bill/purcase-bill.component';
import { MaterialModule } from 'src/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaleBillReportComponent } from './sale-bill-report/sale-bill-report.component';


@NgModule({
  declarations: [
    ShowAllPurchaseBillComponent,
    PurcaseBillComponent,
    SaleBillReportComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ReportModule { }
