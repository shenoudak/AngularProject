import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';



@NgModule({
  declarations: [
    AddCategoryComponent,
    EditCategoryComponent,
    DeleteCategoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    AddCategoryComponent,
    EditCategoryComponent,
    DeleteCategoryComponent
  ]
})
export class CategoryModule { }
