import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenceRoutingModule } from './expence-routing.module';
import { ShowExpenseTypeComponent } from './show-expense-type/show-expense-type.component';
import { AddExpenseTypeComponent } from './add-expense-type/add-expense-type.component';
import { EditExpenseTypeComponent } from './edit-expense-type/edit-expense-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShowExpenseTypeComponent,
    AddExpenseTypeComponent,
    EditExpenseTypeComponent
  ],
  imports: [
    CommonModule,
    ExpenceRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ExpenceModule { }
