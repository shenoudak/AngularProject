import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerType } from 'src/app/shared_classes_intefaces/customerType';
import { Employee } from 'src/app/shared_classes_intefaces/employee';
import { Expense } from 'src/app/shared_classes_intefaces/expense';
import { Stock } from 'src/app/shared_classes_intefaces/stock';
import { CustomerTypeService } from 'src/Customer/customer/customerService/customer-type.service';
import { EmployeeService } from 'src/employee/services/employee.service';
import { PaymentMethodService } from 'src/payment-method/payment-method.service';
import { StockService } from 'src/stock/stock/stock.service';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.scss']
})
export class EditExpenseComponent implements OnInit {

  constructor(private fb: FormBuilder,private datePipe:DatePipe ,private activatedRoute:ActivatedRoute,private expenseService:ExpenseService, private paymentMethodService: PaymentMethodService,private stockService:StockService, private employeeService: EmployeeService, private router: Router,private customerTypeService:CustomerTypeService) { }
  expenseId:any;
  expense:Expense={} as Expense;
  stockList: Stock[] = [];
  employeeList: Employee[] = [];
  customerTypeList: CustomerType[] = [];
 paymentMethodList: any[] = [];
 changeDataFormat:any;
 /*stockList: Stock[] = [];
 changeDataFormat:any;
 transferOperationId:any;
 transferOperation:TransferOperation={} as TransferOperation;
 employeeList: Employee[] = [];*/
 ngOnInit(): void {
   this.activatedRoute.paramMap.subscribe(parms=>{
     this.expenseId=parms.get('id');
     this.expenseService.getByID(this.expenseId).subscribe(data=>{
       this.expense=data;
       console.log(this.expense);
       this.stockService.getAll().subscribe(data=>{
         this.stockList=data;}
         ,error=>{
           console.log(error);
         });
         this.customerTypeService.getAll().subscribe(data=>{
          this.customerTypeList=data;}
          ,error=>{
            console.log(error);
          });
          this.paymentMethodService.showPaymentMethod().subscribe(data=>{
            this.paymentMethodList=data;}
            ,error=>{
              console.log(error);
            });
         this.employeeService.getAll().subscribe(data=>{
           this.employeeList=data;
           }
           ,error=>{
             console.log(error);
           });
           console.log(this.employeeList)
     this.changeDataFormat = this.datePipe.transform(this.expense.date, 'yyyy-MM-dd')
     this.registrationForm.get('Date')?.patchValue(this.changeDataFormat);
     this.registrationForm.get('Notes')?.patchValue(this.expense.notes);
     this.registrationForm.get('Value')?.patchValue(this.expense.value);
     this.registrationForm.get('CheckNumber')?.patchValue(this.expense.checkNumber);
     this.registrationForm.get('EmployeeId')?.patchValue(this.expense.employeeId);
     this.registrationForm.get('StockId')?.patchValue(this.expense.stockId);
     this.registrationForm.get('CustomerTypeId')?.patchValue(this.expense.typeId);
     this.registrationForm.get('PaymentMethodId')?.patchValue(this.expense.payMethodId);
       },error=>{console.log(error);
       });
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
  expenseObj: Expense={} as Expense;
  SaveData() {
    this.expenseObj = new Expense(this.Date?.value, this.Notes?.value,this.Value?.value,this.CheckNumber?.value,this.StockId?.value, this.EmployeeId?.value, this.CustomerTypeId?.value, this.PaymentMethodId?.value);
    this.expenseObj.id=this.expenseId;
    this.expenseService.update(this.expenseId,this.expenseObj).subscribe(data => {
      console.log(data);
      this.router.navigate(['/home/expense']);
    }, error => {
      console.log(error);
    });

    console.log(this.expenseObj);
  }


}