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
@NgModule({
  declarations: [
    StockMainComponent,
    AddStockComponent,
    ShowStockComponent,
    EditStockComponent,
    ShowTransferOperationComponent,
    AddTransferOperationComponent,
    EditTransferOperationComponent,
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
