import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
