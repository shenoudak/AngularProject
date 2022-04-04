import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/shared_classes_intefaces/category';
import { CategoryService } from '../productService/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  constructor(private fb:FormBuilder,private categoryService:CategoryService,private router:Router) { }
  ngOnInit(): void {
 }
 get Name(){  
   return this.registrationForm.get('Name');
  }
  get Description(){  
   return this.registrationForm.get('Description');
  } 
  registrationForm=this.fb.group(
    {
      Name:['',[Validators.required,Validators.minLength(5)]],
     Description:['',[Validators.required,Validators.minLength(10)]],
    }
  );
  category:Category={} as Category;
   SaveData(){
     this.category=new Category(this.Name?.value,this.Description?.value);
     this.categoryService.insert(this.category).subscribe(data=>{
       console.log(data);
       this.router.navigate(['home/product/showCategory']);
       
     },error=>{
       console.log(error);
     });
     
     console.log(this.category);
   }



}
