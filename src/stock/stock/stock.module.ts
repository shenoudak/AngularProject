import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { AddStockComponent } from '../../app/add-stock/add-stock.component';
import { MaterialModule } from 'src/material/material.module';
import { ShowStockComponent } from 'src/app/show-stock/show-stock.component';
import { StockMainComponent } from 'src/app/stock-main/stock-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditStockComponent } from 'src/app/edit-stock/edit-stock.component';
import { ConfirmDeleteComponent } from 'src/app/confirm-delete/confirm-delete.component';
import { ShowTransferOperationComponent } from './show-transfer-operation/show-transfer-operation.component';
import { AddTransferOperationComponent } from './add-transfer-operation/add-transfer-operation.component';
import { EditTransferOperationComponent } from './edit-transfer-operation/edit-transfer-operation.component';
import { AddJobComponent } from './add-job/add-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { ShowJobComponent } from './show-job/show-job.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';
import { ShowSupplierComponent } from './show-supplier/show-supplier.component';
import { AddStockProductComponent } from './add-stock-product/add-stock-product.component';
import { EditStockProductComponent } from './edit-stock-product/edit-stock-product.component';
import { ShowStockProductComponent } from './show-stock-product/show-stock-product.component';
@NgModule({
  declarations: [
    StockMainComponent,
    AddStockComponent,
    ShowStockComponent,
    EditStockComponent,
    ShowTransferOperationComponent,
    AddTransferOperationComponent,
    EditTransferOperationComponent,
    AddJobComponent,
    EditJobComponent,
    ShowJobComponent,
    AddSupplierComponent,
    EditSupplierComponent,
    ShowSupplierComponent,
    AddStockProductComponent,
    EditStockProductComponent,
    ShowStockProductComponent,
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
  ,
  providers: [DatePipe],
})
export class StockModule { }
