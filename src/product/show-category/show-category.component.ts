import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
import { Category } from 'src/app/shared_classes_intefaces/category';
import { CategoryService } from '../productService/category.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.scss']
})
export class ShowCategoryComponent implements OnInit {

  constructor(private router:Router,private dialogService:ConfirmDeleteService,private categoryService:CategoryService ) { }
  displayedColumns: string[] = ['name','description','actions'];
  dataSource:any=[];
  categoryList: Category []=[];
  ngOnInit(): void 
  {
    this.categoryService.getAll().subscribe(data=>{
      this.categoryList=data;
      this.dataSource=this.categoryList;
      console.log(this.dataSource);
    },error=>{
      console.log(error);
    })
  }
 
  navigateToAddCategory(){
    this.router.navigate(['/home/product/addCategory']);
  }
  NavigationToEditCategory(id:any){
    this.router.navigate(['/home/product/editCategory',{id:id}]);
    console.log(id);
  }
  deleteCategory(id:any){
    console.log(id);
    this.dialogService.openConfirmDialog().afterClosed().subscribe(res=>{
      console.log(id);
      if(res==true){
        this.categoryService.removeD(id).subscribe(res=>{
          this.categoryService.getAll().subscribe(data=>{
            this.categoryList=data;
            this.dataSource=this.categoryList;
          })
          console.log('delete successfully');
        },error=>{
          console.log(error);
        });
      }
    });
  }



}
