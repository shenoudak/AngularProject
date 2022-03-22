import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { ShowCategoryComponent } from './show-category/show-category.component';



@NgModule({
  declarations: [
    AddCategoryComponent,
    EditCategoryComponent,
    DeleteCategoryComponent,
    ShowCategoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    AddCategoryComponent,
    EditCategoryComponent,
    DeleteCategoryComponent,
    ShowCategoryComponent
  ]
})
export class CategoryModule { }
