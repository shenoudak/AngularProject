import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
import { ExpenseType } from 'src/app/shared_classes_intefaces/expenseType';
import { ExpenseTypeService } from '../services/expense-type.service';

@Component({
  selector: 'app-show-expense-type',
  templateUrl: './show-expense-type.component.html',
  styleUrls: ['./show-expense-type.component.scss']
})
export class ShowExpenseTypeComponent implements OnInit {

  constructor(private router:Router,private dialogService:ConfirmDeleteService,private expenseTypeService:ExpenseTypeService ) { }

  ngOnInit(): void {
  }
  expenseTypeList:ExpenseType[]=
  [
    {ID:1,Name:'gomla',Details:'Gomla'},
    {ID:2,Name:'gomla',Details:'Gomla'},
    {ID:3,Name:'gomla',Details:'Gomla'}
  ]
  navigateToAddExpenseType(){
    this.router.navigate(['/home/expense/addExpenseType']);
  }
  NavigationToEditExpenseType(id:any){
    this.router.navigate(['/home/expense/editExpenseType',{id:id}]);
    console.log(id);
  }
  deleteExpenseType(id:any){
    this.dialogService.openConfirmDialog().afterClosed().subscribe(res=>{
      if(res==true){
        this.expenseTypeService.removeD(id).subscribe(res=>{
          console.log('delete successfully');
        },error=>{
          console.log(error);
        });
      }
    });
  }

}
