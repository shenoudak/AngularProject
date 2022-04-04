import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddExpiredProductComponent } from './add-expired-product/add-expired-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditExpiredProductComponent } from './edit-expired-product/edit-expired-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { ShowExpiredProductComponent } from './show-expired-product/show-expired-product.component';
import { ShowProductComponent } from './show-product/show-product.component';

const routes: Routes = 
[
  {path:'home/product/showProduct',component:ShowProductComponent},
  {path:'home/product/addProduct',component:AddProductComponent},
  {path:'home/product/editProduct',component:EditProductComponent},
  {path:'home/product/addCategory',component:AddCategoryComponent},
  {path:'home/product/editCategory',component:EditCategoryComponent},
  {path:'home/product/showCategory',component:ShowCategoryComponent},
  {path:'home/product/showExpProduct',component:ShowExpiredProductComponent},
  {path:'home/product/editExpProduct',component:EditExpiredProductComponent},
  {path:'home/product/addExpProduct',component:AddExpiredProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
