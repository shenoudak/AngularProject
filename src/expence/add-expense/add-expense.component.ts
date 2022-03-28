import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerType } from 'src/app/shared_classes_intefaces/customerType';
import { Employee } from 'src/app/shared_classes_intefaces/employee';
import { Expense } from 'src/app/shared_classes_intefaces/expense';
import { Stock } from 'src/app/shared_classes_intefaces/stock';
import { CustomerTypeService } from 'src/Customer/customer/customerService/customer-type.service';
import { EmployeeService } from 'src/employee/services/employee.service';
import { IPayment } from 'src/payment-method/IPayment';
import { PaymentMethodService } from 'src/payment-method/payment-method.service';
import { StockService } from 'src/stock/stock/stock.service';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {

  constructor(private fb: FormBuilder,private expenseService:ExpenseService, private paymentMethodService: PaymentMethodService,private stockService:StockService, private employeeService: EmployeeService, private router: Router,private customerTypeService:CustomerTypeService) { }
  stockList: Stock[] = [];
  employeeList: Employee[] = [];
  customerTypeList: CustomerType[] = [];
 paymentMethodList: any[] = [];
  ngOnInit(): void {
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
      this.customerTypeService.getAll().subscribe(data => {
        this.customerTypeList = data;
        console.log(this.customerTypeList);
      }, error => {
        console.log(error);
      });
      this.paymentMethodService.showPaymentMethod().subscribe(data => {
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
  get CustomerTypeId() {
    return this.registrationForm.get('CustomerTypeId');
  }
  get PaymentMethodId() {
    return this.registrationForm.get('PaymentMethodId');
  }

  registrationForm = this.fb.group(
    {
      Date: ['', [Validators.required]],
      Notes: ['',],
      Value: ['', [Validators.required,Validators.pattern('^[0-9]+$')]],
      CheckNumber: ['', [Validators.required,Validators.pattern('^[0-9]+$')]],
      EmployeeId: ['', [Validators.required]],
      StockId: ['', [Validators.required]],
      CustomerTypeId: ['', [Validators.required]],
      PaymentMethodId: ['', [Validators.required]],
    }
  );
  expense: Expense={} as Expense;
  SaveData() {
    this.expense = new Expense(this.Date?.value, this.Notes?.value,this.Value?.value,this.CheckNumber?.value,this.StockId?.value, this.EmployeeId?.value, this.CustomerTypeId?.value, this.PaymentMethodId?.value);

    this.expenseService.insert(this.expense).subscribe(data => {
      console.log(data);
      this.router.navigate(['/home/expense']);
    }, error => {
      console.log(error);
    });

    console.log(this.expense);
  }

}
