import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ShowProductComponent } from './show-product/show-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material/material.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { ShowExpiredProductComponent } from './show-expired-product/show-expired-product.component';
import { EditExpiredProductComponent } from './edit-expired-product/edit-expired-product.component';
import { AddExpiredProductComponent } from './add-expired-product/add-expired-product.component';


@NgModule({
  declarations: [
    ShowProductComponent,
    AddProductComponent,
    EditProductComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    ShowCategoryComponent,
    ShowExpiredProductComponent,
    EditExpiredProductComponent,
    AddExpiredProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [DatePipe],
})
export class ProductModule { }
