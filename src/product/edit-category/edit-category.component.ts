import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/shared_classes_intefaces/category';
import { CategoryService } from '../productService/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  constructor(private fb:FormBuilder,private activatedRoute:ActivatedRoute,private categoryService:CategoryService,private router:Router) { }

  categoryId:any;
  categoryObject:Category={} as Category;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parms=>{
      this.categoryId=parms.get('id');
       console.log(this.categoryId);
        this.categoryService.getByID(this.categoryId).subscribe(data=>{
       this.categoryObject=data;
       console.log(this.categoryObject);
       this.registrationForm.get('Name')?.patchValue(this.categoryObject.name);
       this.registrationForm.get('Description')?.patchValue(this.categoryObject.description);
     })
 })
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
      this.category.id=this.categoryId;
      this.categoryService.update(this.categoryId,this.category).subscribe(data=>{
        console.log(data);
        this.router.navigate(['home/product/showCategory']);
        
      },error=>{
        console.log(error);
      });
      
      console.log(this.category);
}

}
