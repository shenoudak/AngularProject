import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPaymentMethodComponent } from 'src/payment-method/add-payment-method/add-payment-method.component';
import { EditPaymentMethodComponent } from 'src/payment-method/edit-payment-method/edit-payment-method.component';
import { ShowPaymentMethodComponent } from 'src/payment-method/show-payment-method/show-payment-method.component';
import { EditStockProductComponent } from 'src/stock-product/edit-stock-product/edit-stock-product.component';
import { ShowStockProductComponent } from 'src/stock-product/show-stock-product/show-stock-product.component';
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
  {path:'home/purchase',loadChildren:()=>import('../purchase/purchase.module')
  .then(mod=>mod.PurchaseModule)},
  {path:'home/customer',loadChildren:()=>import('../Customer/customer/customer.module')
  .then(mod=>mod.CustomerModule)},
  {path:'home/tax',loadChildren:()=>import('../taxes/taxes.module')
  .then(mod=>mod.TaxesModule)},
  {path:'home/product',loadChildren:()=>import('../product/product.module')
  .then(mod=>mod.ProductModule)},
  {path:'home/expense',loadChildren:()=>import('../expence/expence.module')
  .then(mod=>mod.ExpenceModule)},
  {path:'home/sales',loadChildren:()=>import('../sales/sales.module')
  .then(mod=>mod.SalesModule)},
  {path:'home/report',loadChildren:()=>import('../report/report.module')
  .then(mod=>mod.ReportModule)},
  {path:'showStockProduct',component:ShowStockProductComponent},
  {path:'AddStockProduct',component:AddStockComponent},
  {path:'EditStockProduct/:{id}',component:EditStockProductComponent},
  {path:'showPayment',component:ShowPaymentMethodComponent},
  {path:'addPayment',component:AddPaymentMethodComponent},
  {path:'editPayment/:{id}',component:EditPaymentMethodComponent},
  {path:'home/employee',loadChildren:()=>import('../employee/employee.module')
  .then(mod=>mod.EmployeeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
