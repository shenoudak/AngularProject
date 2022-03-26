import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from 'src/category/add-category/add-category.component';
import { DeleteCategoryComponent } from 'src/category/delete-category/delete-category.component';
import { EditCategoryComponent } from 'src/category/edit-category/edit-category.component';
import { ShowCategoryComponent } from 'src/category/show-category/show-category.component';
import { AddExpiredProductComponent } from 'src/expired-product/add-expired-product/add-expired-product.component';
import { EditExpiredProductComponent } from 'src/expired-product/edit-expired-product/edit-expired-product.component';
import { ShowExpiredProductComponent } from 'src/expired-product/show-expired-product/show-expired-product.component';
import { AddJobComponent } from 'src/job/add-job/add-job.component';
import { DeleteJobComponent } from 'src/job/delete-job/delete-job.component';
import { EditJobComponent } from 'src/job/edit-job/edit-job.component';
import { ShowJobComponent } from 'src/job/show-job/show-job.component';
import { AddPaymentMethodComponent } from 'src/payment-method/add-payment-method/add-payment-method.component';
import { EditPaymentMethodComponent } from 'src/payment-method/edit-payment-method/edit-payment-method.component';
import { ShowPaymentMethodComponent } from 'src/payment-method/show-payment-method/show-payment-method.component';
import { EditStockProductComponent } from 'src/stock-product/edit-stock-product/edit-stock-product.component';
import { ShowStockProductComponent } from 'src/stock-product/show-stock-product/show-stock-product.component';
import { AddSupplierComponent } from 'src/supplier/add-supplier/add-supplier.component';
import { DeleteSpplierComponent } from 'src/supplier/delete-spplier/delete-spplier.component';
import { EditSupplierComponent } from 'src/supplier/edit-supplier/edit-supplier.component';
import { ShowSupplierComponent } from 'src/supplier/show-supplier/show-supplier.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = 
[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'sidenav',component:SidenavComponent},
  {path:'home/stock',loadChildren:()=>import('../stock/stock/stock.module')
  .then(mod=>mod.StockModule)},
  {path:'home/customer',loadChildren:()=>import('../Customer/customer/customer.module')
  .then(mod=>mod.CustomerModule)},
  {path:'home/tax',loadChildren:()=>import('../taxes/taxes.module')
  .then(mod=>mod.TaxesModule)},
  {path:'home/product',loadChildren:()=>import('../product/product.module')
  .then(mod=>mod.ProductModule)},
  {path:'home/expense',loadChildren:()=>import('../expence/expence.module')
  .then(mod=>mod.ExpenceModule)},
  {path:'showStockProduct',component:ShowStockProductComponent},
  {path:'AddStockProduct',component:AddStockComponent},
  {path:'EditStockProduct/:{id}',component:EditStockProductComponent},
  {path:'showExpiredProduct',component:ShowExpiredProductComponent},
  {path:'AddExpiredProduct',component:AddExpiredProductComponent},
  {path:'EditExpiredProduct/:{id}',component:EditExpiredProductComponent},
  {path:'showSupplier',component:ShowSupplierComponent},
  {path:'AddSupplier',component:AddSupplierComponent},
  {path:'EditSupplier/:{id}',component:EditSupplierComponent},
  {path:'showCategory',component:ShowCategoryComponent},
  {path:'addCategory',component:AddCategoryComponent},
  {path:'editCategory/:{id}',component:EditCategoryComponent},
  {path:'showJob',component:ShowJobComponent},
  {path:'addJob',component:AddJobComponent},
  {path:'editJob/:{id}',component:EditJobComponent},
  {path:'showPayment',component:ShowPaymentMethodComponent},
  {path:'addPayment',component:AddPaymentMethodComponent},
  {path:'editPayment/:{id}',component:EditPaymentMethodComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
