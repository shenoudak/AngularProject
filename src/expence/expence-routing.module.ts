import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpenseTypeComponent } from './add-expense-type/add-expense-type.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { EditExpenseTypeComponent } from './edit-expense-type/edit-expense-type.component';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';
import { ShowExpenseTypeComponent } from './show-expense-type/show-expense-type.component';
import { ShowExpenseComponent } from './show-expense/show-expense.component';

const routes: Routes = 
[
  {path:'',component:ShowExpenseComponent},
  {path:'home/expense/addExpense',component:AddExpenseComponent},
  {path:'home/expense/editExpense',component:EditExpenseComponent},
  {path:'home/expense/showExpenseType',component:ShowExpenseTypeComponent},
  {path:'home/expense/addExpenseType',component:AddExpenseTypeComponent},
  {path:'home/expense/editExpenseType',component:EditExpenseTypeComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenceRoutingModule { }
