import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseType } from 'src/app/shared_classes_intefaces/expenseType';
import { ExpenseTypeService } from '../services/expense-type.service';

@Component({
  selector: 'app-edit-expense-type',
  templateUrl: './edit-expense-type.component.html',
  styleUrls: ['./edit-expense-type.component.scss']
})
export class EditExpenseTypeComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private expenseTypeService: ExpenseTypeService, private activatedRoute: ActivatedRoute) { }
  expenseTypeId: any;
  expenseType: ExpenseType = {} as ExpenseType;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parms => {
      this.expenseTypeId = parms.get('id');
      console.log(this.expenseTypeId);
      this.expenseTypeService.getByID(this.expenseTypeId).subscribe(data => {
        this.expenseType = data;
        console.log(this.expenseType);
        this.registrationForm.get('Name')?.patchValue(this.expenseType.name);
        this.registrationForm.get('Details')?.patchValue(this.expenseType.details);
      }, error => {
        console.log(error);
      })
    })
  }
  get Name() {
    return this.registrationForm.get('Name');
  }
  get Details() {
    return this.registrationForm.get('Details');
  }
  registrationForm = this.fb.group(
    {
      Name: ['', [Validators.required, Validators.minLength(5)]],
      Details: ['', [Validators.required, Validators.minLength(5)]],
    }
  );
  expenseTypeObj: any;
  SaveData() {
    this.expenseTypeObj = new ExpenseType(this.Name?.value, this.Details?.value);
    this.expenseTypeObj.id = this.expenseTypeId;
    console.log(this.expenseTypeObj);
    this.expenseTypeService.update(this.expenseTypeId, this.expenseTypeObj).subscribe(data => {
      console.log(data);
      this.router.navigate(['home/expense/showExpenseType']);
    }, error => {
      console.log(error);
    });
    console.log(this.expenseType);
  }
}
