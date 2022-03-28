import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
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
  selector: 'app-show-expense',
  templateUrl: './show-expense.component.html',
  styleUrls: ['./show-expense.component.scss']
})
export class ShowExpenseComponent implements OnInit {

  constructor(private router:Router,private expenseService:ExpenseService,private dialogService:ConfirmDeleteService,private customerTypeService:CustomerTypeService,private employeeService:EmployeeService,private stockService:StockService,private paymentMethodService:PaymentMethodService ) { }
  expenseList:Expense[]=[];
  stock:Stock={} as Stock;
  customerType:CustomerType={} as CustomerType;
  employee:Employee={} as Employee;
  paymentMethod:any;
  paymentMethodList:any[]=[];
  employeeNamesList:any[]=[];
  stockNamesList:any[]=[];
  customerTypeNamesList:any[]=[];
  ngOnInit(): void {
    this.expenseService.getAll().subscribe(data=>{
      this.expenseList=data;
      console.log(data);
      for(let element of this.expenseList){
         this.stockService.getByID(element.stockId).subscribe(res=>{
         this.stock=res;
         this.stockNamesList.push(this.stock.name);
         },error=>{
           console.log(error);
         }
         );
         this.employeeService.getByID(element.employeeId).subscribe(res=>{
          this.employee=res;
          this.employeeNamesList.push(this.employee.name);
         },error=>{
           console.log(error);
         });
         this.customerTypeService.getByID(element.typeId).subscribe(res=>{
          this.customerType=res;
          this.customerTypeNamesList.push(this.customerType.typeName);
         },error=>{
           console.log(error);
         });
         this.paymentMethodService.showPaymentById(element.payMethodId).subscribe(res=>{
          this.paymentMethod=res;
          console.log(this.paymentMethod);
          this.paymentMethodList.push(this.paymentMethod.name);
         },error=>{
           console.log(error);
         });
        }
        
         
         },error=>{
           console.log(error);
         });
  }
  navigateToAddExpense(){
    this.router.navigate(['/home/expense/addExpense']);
  }
  NavigationToEditExpense(id:number){
    this.router.navigate(['/home/expense/editExpense',{id:id}]);
    console.log(id);
  }
  deleteExpense(id:number){
    this.dialogService.openConfirmDialog().afterClosed().subscribe(res=>{
      if(res==true){
        this.expenseService.removeD(id).subscribe(res=>{
          console.log('delete successfully');
          this.expenseService.getAll().subscribe(data=>{
            this.expenseList=data;
          },error=>{console.log(error)});
        },error=>{
          console.log(error);
        });
      }
      },error=>{
        console.log(error);
    }
  );
  
  }
}
