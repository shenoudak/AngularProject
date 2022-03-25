import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ExpenseType } from 'src/app/shared_classes_intefaces/expenseType';
import { ExpenseTypeService } from '../services/expense-type.service';

@Component({
  selector: 'app-add-expense-type',
  templateUrl: './add-expense-type.component.html',
  styleUrls: ['./add-expense-type.component.scss']
})
export class AddExpenseTypeComponent implements OnInit {

  constructor(private fb:FormBuilder,private expenseTypeService:ExpenseTypeService) { }
  ngOnInit(): void {
 }
 get Name(){  
   return this.registrationForm.get('Name');
  }
  get Details(){  
   return this.registrationForm.get('Details');
  } 
  registrationForm=this.fb.group(
    {
     Name:['',[Validators.required,Validators.minLength(5)]],
     Details:['',[Validators.required,Validators.minLength(5)]],
    }
  );
  expenseType:any;
   SaveData(){
     this.expenseType=new ExpenseType(1,this.Name?.value,this.Details?.value);

     this.expenseTypeService.insert(this.expenseType).subscribe(data=>{
       console.log(data);
     },error=>{
       console.log(error);
     });
     
     console.log(this.expenseType);
   }


}
