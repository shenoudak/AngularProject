import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerType } from 'src/app/shared_classes_intefaces/customerType';
import { Employee } from 'src/app/shared_classes_intefaces/employee';
import { Expense } from 'src/app/shared_classes_intefaces/expense';
import { ExpenseType } from 'src/app/shared_classes_intefaces/expenseType';
import { Stock } from 'src/app/shared_classes_intefaces/stock';
import { EmployeeService } from 'src/employee/services/employee.service';
import { PaymentMService } from 'src/payment/services/payment-m.service';
import { StockService } from 'src/stock/stock/stock.service';
import { ExpenseTypeService } from '../services/expense-type.service';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {

  constructor(private fb: FormBuilder, private datePipe:DatePipe,private expenseService: ExpenseService, private paymentMethodService: PaymentMService, private stockService: StockService, private employeeService: EmployeeService, private router: Router, private expenseTypeService: ExpenseTypeService) { }
  stockList: Stock[] = [];
  employeeList: Employee[] = [];
  expenseTypeList: ExpenseType[] = [];
  paymentMethodList: any[] = [];
  myDateToDay: any;
  ngOnInit(): void {
    this.myDateToDay = new Date();
    this.stockService.getAll().subscribe(data => {

      this.stockList = data;
      console.log(this.stockList);
    }, error => {
      console.log(error);
    }),
      this.employeeService.getAll().subscribe(data => {
        this.employeeList = data;
        console.log(this.employeeList);
      }, error => {
        console.log(error);
      });
    this.expenseTypeService.getAll().subscribe(data => {
      this.expenseTypeList = data;
      console.log(this.expenseTypeList);
    }, error => {
      console.log(error);
    });
    this.paymentMethodService.getAll().subscribe(data => {
      this.paymentMethodList = data;
      console.log(this.paymentMethodList);
    }, error => {
      console.log(error);
    });
  }
  get Date() {
    return this.registrationForm.get('Date');
  }
  get Notes() {
    return this.registrationForm.get('Notes');
  }
  get Value() {
    return this.registrationForm.get('Value');
  }
  get CheckNumber() {
    return this.registrationForm.get('CheckNumber');
  }
  get StockId() {
    return this.registrationForm.get('StockId');
  }
  get EmployeeId() {
    return this.registrationForm.get('EmployeeId');
  }
  get ExpenseTypeId() {
    return this.registrationForm.get('ExpenseTypeId');
  }
  get PaymentMethodId() {
    return this.registrationForm.get('PaymentMethodId');
  }

  registrationForm = this.fb.group(
    {
      Date: ['', [Validators.required]],
      Notes: ['',],
      Value: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      CheckNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      EmployeeId: ['', [Validators.required]],
      StockId: ['', [Validators.required]],
      ExpenseTypeId: ['', [Validators.required]],
      PaymentMethodId: ['', [Validators.required]],
    }
  );
  expense: Expense = {} as Expense;
  changeDataFormat:any;
  SaveData() {
    this.changeDataFormat = this.datePipe.transform(this.myDateToDay, 'yyyy-MM-dd')
     this.registrationForm.get('Date')?.patchValue(this.changeDataFormat);
    this.expense = new Expense(this.Date?.value, this.Notes?.value, this.Value?.value, this.CheckNumber?.value, this.StockId?.value, this.EmployeeId?.value, this.ExpenseTypeId?.value, this.PaymentMethodId?.value);
    console.log(this.expense);
    this.expenseService.insert(this.expense).subscribe(data => {
      console.log(data);
      this.router.navigate(['/home/expense']);
    }, error => {
      console.log(error);
    });

    console.log(this.expense);
  }

}
