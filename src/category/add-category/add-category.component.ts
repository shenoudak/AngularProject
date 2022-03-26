import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  constructor(private fb:FormBuilder,private catServices:CategoryService,private router:Router) { }
  addCategory=this.fb.group({
   name:['',Validators.required],
   description:['',Validators.required]
  });

  ngOnInit(): void {
  }
  submitForm() {
    this.catServices.addCategory(this.addCategory.value).subscribe(res => {
      console.log('Product created!')
      this.router.navigate(['/addCategory'])

  })

}}
