import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStockComponent } from 'src/app/add-stock/add-stock.component';
import { ConfirmDeleteComponent } from 'src/app/confirm-delete/confirm-delete.component';
import { EditStockComponent } from 'src/app/edit-stock/edit-stock.component';
import { StockMainComponent } from 'src/app/stock-main/stock-main.component';
import { AddJobComponent } from './add-job/add-job.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { AddTransferOperationComponent } from './add-transfer-operation/add-transfer-operation.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';
import { EditTransferOperationComponent } from './edit-transfer-operation/edit-transfer-operation.component';
import { ShowJobComponent } from './show-job/show-job.component';
import { ShowSupplierComponent } from './show-supplier/show-supplier.component';
import { ShowTransferOperationComponent } from './show-transfer-operation/show-transfer-operation.component';

const routes: Routes = 
[
  //{path:'addStock',Component:AddStockComponent},
  {path:'',component:StockMainComponent},
  {path:'home/stock/add',component:AddStockComponent,pathMatch:'full'},
  {path:'home/stock/edit',component:EditStockComponent,pathMatch:'full'},
  {path:'home/stock/delete',component:ConfirmDeleteComponent,pathMatch:'full'},
  {path:'home/stock/showTransfer',component:ShowTransferOperationComponent,pathMatch:'full'},
  {path:'home/stock/editTransfer',component:EditTransferOperationComponent,pathMatch:'full'},
  {path:'home/stock/addTransfer',component:AddTransferOperationComponent,pathMatch:'full'},
  {path:'home/stock/showJob',component:ShowJobComponent,pathMatch:'full'},
  {path:'home/stock/addJob',component:AddJobComponent,pathMatch:'full'},
  {path:'home/stock/editJob',component:EditJobComponent,pathMatch:'full'},
  {path:'home/stock/showSupplier',component:ShowSupplierComponent,pathMatch:'full'},
  {path:'home/stock/addSupplier',component:AddSupplierComponent,pathMatch:'full'},
  {path:'home/stock/editSupplier',component:EditSupplierComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
