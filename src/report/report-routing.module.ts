import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurcaseBillComponent } from './purcase-bill/purcase-bill.component';
import { SaleBillReportComponent } from './sale-bill-report/sale-bill-report.component';


const routes: Routes =
 [
    {path:'home/report/purchaseBill',component:PurcaseBillComponent},
    {path:'home/report/saleBill',component:SaleBillReportComponent}
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
