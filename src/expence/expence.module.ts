import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ExpenceRoutingModule } from './expence-routing.module';
import { ShowExpenseTypeComponent } from './show-expense-type/show-expense-type.component';
import { AddExpenseTypeComponent } from './add-expense-type/add-expense-type.component';
import { EditExpenseTypeComponent } from './edit-expense-type/edit-expense-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowExpenseComponent } from './show-expense/show-expense.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';
import { MaterialModule } from 'src/material/material.module';


@NgModule({
  declarations: [
    ShowExpenseTypeComponent,
    AddExpenseTypeComponent,
    EditExpenseTypeComponent,
    ShowExpenseComponent,
    AddExpenseComponent,
    EditExpenseComponent
  ],
  imports: [
    CommonModule,
    ExpenceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
  ,
  providers: [DatePipe],
})
export class ExpenceModule { }
