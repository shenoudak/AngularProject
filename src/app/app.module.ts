import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{CategoryModule}from'./category/category.module';
import { JobModule } from './job/job.module';
import{HttpClient, HttpClientModule}from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CategoryModule,
    ReactiveFormsModule,
    HttpClientModule,
    JobModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
