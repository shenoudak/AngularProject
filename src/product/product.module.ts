import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ShowProductComponent } from './show-product/show-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material/material.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ShowCategoryComponent } from './show-category/show-category.component';


@NgModule({
  declarations: [
    ShowProductComponent,
    AddProductComponent,
    EditProductComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    ShowCategoryComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ProductModule { }
