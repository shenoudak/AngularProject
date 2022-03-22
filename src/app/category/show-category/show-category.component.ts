import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.scss']
})
export class ShowCategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }
  cateoryList:any;
  showCat(){
   
  }

  ngOnInit(): void {
    this.categoryService.showCategory().subscribe(data=>{
      this.cateoryList=data
    })
  }

}
