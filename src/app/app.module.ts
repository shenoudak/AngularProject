import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material/material.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockModule } from 'src/stock/stock/stock.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { CustomerModule } from 'src/Customer/customer/customer.module';
import { TaxesModule } from 'src/taxes/taxes.module';
import { ProductModule } from 'src/product/product.module';
import { ExpenceModule } from 'src/expence/expence.module';
import { CategoryModule } from 'src/category/category.module';
import { ExpiredProductModule } from 'src/expired-product/expired-product.module';
import { JobModule } from 'src/job/job.module';
import { PaymentMethodModule } from 'src/payment-method/payment-method.module';
import { StockProductModule } from 'src/stock-product/stock-product.module';
import { SupplierModule } from 'src/supplier/supplier.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent,
    ConfirmDeleteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StockModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomerModule,
    TaxesModule,
    ProductModule,
    ExpenceModule,
    CategoryModule,
    ExpiredProductModule,
    JobModule,
    PaymentMethodModule,
    StockProductModule,
    SupplierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
