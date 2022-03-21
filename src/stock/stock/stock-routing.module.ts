import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStockComponent } from 'src/app/add-stock/add-stock.component';
import { EditStockComponent } from 'src/app/edit-stock/edit-stock.component';
import { ShowStockComponent } from 'src/app/show-stock/show-stock.component';
import { StockMainComponent } from 'src/app/stock-main/stock-main.component';

const routes: Routes = 
[
  //{path:'addStock',Component:AddStockComponent},
  {path:'',component:StockMainComponent},
  {path:'home/stock/add',component:AddStockComponent,pathMatch:'full'},
  {path:'home/stock/edit',component:EditStockComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
