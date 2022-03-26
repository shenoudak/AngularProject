import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStockProductComponent } from './add-stock-product/add-stock-product.component';
import { EditStockProductComponent } from './edit-stock-product/edit-stock-product.component';
import { ShowStockProductComponent } from './show-stock-product/show-stock-product.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddStockProductComponent,
    EditStockProductComponent,
    ShowStockProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
ShowStockProductComponent,
EditStockProductComponent,
AddStockProductComponent
  ]
})
export class StockProductModule { }
