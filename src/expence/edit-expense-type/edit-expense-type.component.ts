import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ExpenseType } from 'src/app/shared_classes_intefaces/expenseType';
import { ExpenseTypeService } from '../services/expense-type.service';

@Component({
  selector: 'app-edit-expense-type',
  templateUrl: './edit-expense-type.component.html',
  styleUrls: ['./edit-expense-type.component.scss']
})
export class EditExpenseTypeComponent implements OnInit {

  constructor(private fb:FormBuilder,private expenseTypeService:ExpenseTypeService,private activatedRoute:ActivatedRoute) { }
  expenseTypeId:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parms=>{
      this.expenseTypeId=parms.get('id');
      console.log(this.expenseTypeId);
       // this.ExpenseTypeService.getByID(this.expenseTypeId).subscribe(data=>{
    //   this.expenseType=data;
    // })
    })
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
