import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
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
  selector: 'app-show-expense',
  templateUrl: './show-expense.component.html',
  styleUrls: ['./show-expense.component.scss']
})
export class ShowExpenseComponent implements OnInit {

  constructor(private router: Router, private expenseService: ExpenseService, private dialogService: ConfirmDeleteService, private expenseTypeService: ExpenseTypeService, private employeeService: EmployeeService, private stockService: StockService, private paymentMethodService: PaymentMService) { }
  displayedColumns: string[] = ['date', 'notes', 'value', 'checkNumber', 'stockName', 'employeeName', 'expenseType', 'paymentMethodType', 'actions'];


  dataSource: any = [];
  expenseList: Expense[] = [];
  stock: Stock = {} as Stock;
  expenseType: ExpenseType = {} as ExpenseType;
  employee: Employee = {} as Employee;
  paymentMethod: any;
  paymentMethodList: any[] = [];
  employeeNamesList: any[] = [];
  stockNamesList: any[] = [];
  expenseTypeNamesList: any[] = [];
  ngOnInit(): void {
    this.expenseService.getAll().subscribe(data => {
      this.expenseList = data;
      this.dataSource = this.expenseList;
      console.log(data);
      for (let element of this.expenseList) {
        this.stockService.getByID(element.stockId).subscribe(res => {
          this.stock = res;
          this.stockNamesList.push(this.stock.name);
        }, error => {
          console.log(error);
        }
        );
        this.employeeService.getByID(element.employeeId).subscribe(res => {
          this.employee = res;
          this.employeeNamesList.push(this.employee.name);
        }, error => {
          console.log(error);
        });
        this.expenseTypeService.getByID(element.typeId).subscribe(res => {
          this.expenseType = res;
          this.expenseTypeNamesList.push(this.expenseType.name);
        }, error => {
          console.log(error);
        });
        this.paymentMethodService.getByID(element.payMethodId).subscribe(res => {
          this.paymentMethod = res;
          console.log(this.paymentMethod);
          this.paymentMethodList.push(this.paymentMethod.name);
        }, error => {
          console.log(error);
        });
      }


    }, error => {
      console.log(error);
    });
  }
  navigateToAddExpense() {
    this.router.navigate(['/home/expense/addExpense']);
  }
  NavigationToEditExpense(id: number) {
    this.router.navigate(['/home/expense/editExpense', { id: id }]);
    console.log(id);
  }
  deleteExpense(id: number) {
    this.dialogService.openConfirmDialog().afterClosed().subscribe(res => {
      if (res == true) {
        this.expenseService.removeD(id).subscribe(res => {
          console.log('delete successfully');
          this.expenseService.getAll().subscribe(data => {
            this.expenseList = data;
            this.dataSource = this.expenseList;
          }, error => { console.log(error) });
        }, error => {
          console.log(error);
        });
      }
    }, error => {
      console.log(error);
    }
    );

  }
}
