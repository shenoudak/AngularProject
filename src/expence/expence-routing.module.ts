import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpenseTypeComponent } from './add-expense-type/add-expense-type.component';
import { EditExpenseTypeComponent } from './edit-expense-type/edit-expense-type.component';
import { ShowExpenseTypeComponent } from './show-expense-type/show-expense-type.component';

const routes: Routes = 
[
  {path:'',component:ShowExpenseTypeComponent},
  {path:'home/expense/addExpenseType',component:AddExpenseTypeComponent},
  {path:'home/expense/editExpenseType',component:EditExpenseTypeComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenceRoutingModule { }
