import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  editCategory=this.fb.group({
    name:['',Validators.required],
    describtion:['',Validators.required]
  })

  ngOnInit(): void {
  }

}
