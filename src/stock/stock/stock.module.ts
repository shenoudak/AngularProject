import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { AddStockComponent } from '../../app/add-stock/add-stock.component';
import { MaterialModule } from 'src/material/material.module';
import { ShowStockComponent } from 'src/app/show-stock/show-stock.component';
import { StockMainComponent } from 'src/app/stock-main/stock-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditStockComponent } from 'src/app/edit-stock/edit-stock.component';
import { ConfirmDeleteComponent } from 'src/app/confirm-delete/confirm-delete.component';
@NgModule({
  declarations: [
    StockMainComponent,
    AddStockComponent,
    ShowStockComponent,
    EditStockComponent,
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class StockModule { }
