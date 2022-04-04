import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { ShowProductComponent } from './show-product/show-product.component';

const routes: Routes = 
[
  {path:'',component:ShowProductComponent},
  {path:'home/product/addProduct',component:AddProductComponent},
  {path:'home/product/editProduct',component:EditProductComponent},
  {path:'home/product/addCategory',component:AddCategoryComponent},
  {path:'home/product/editCategory',component:EditCategoryComponent},
  {path:'home/product/showCategory',component:ShowCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
