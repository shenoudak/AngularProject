import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss']
})
export class DeleteCategoryComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
deleteCategory=this.fb.group({
  name:['',Validators.required],
  describtion:['',Validators.required]
})
  ngOnInit(): void {
  }
  show(){
    console.log("category deeted successfuly");
  }

}
