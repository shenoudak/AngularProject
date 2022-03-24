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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
