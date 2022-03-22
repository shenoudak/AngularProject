import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  addCategory=this.fb.group({
   name:['',Validators.required],
   describtion:['',Validators.required]
  });

  ngOnInit(): void {
  }

}
