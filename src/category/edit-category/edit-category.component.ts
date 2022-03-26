import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  constructor(private fb:FormBuilder,private categoryServices:CategoryService,private route:ActivatedRoute) { }
  editCategory=this.fb.group({
   
    name:['',Validators.required],
    describtion:['',Validators.required]
  })

catId:any;
catList:any;
  ngOnInit(): void {
    this.catId=this.route.paramMap.subscribe((param:ParamMap)=>{
      this.catId=param.get("id");
      this.categoryServices.getCategoryById(this.catId).subscribe(data=>{
        this.catList=data;
      })
    });
   
    

  }

}
