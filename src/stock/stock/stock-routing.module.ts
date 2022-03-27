import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStockComponent } from 'src/app/add-stock/add-stock.component';
import { ConfirmDeleteComponent } from 'src/app/confirm-delete/confirm-delete.component';
import { EditStockComponent } from 'src/app/edit-stock/edit-stock.component';
import { StockMainComponent } from 'src/app/stock-main/stock-main.component';
import { AddTransferOperationComponent } from './add-transfer-operation/add-transfer-operation.component';
import { EditTransferOperationComponent } from './edit-transfer-operation/edit-transfer-operation.component';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
