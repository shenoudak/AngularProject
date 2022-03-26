import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.scss']
})
export class ShowCategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService,private router:Router,private confirmDeleteService:ConfirmDeleteService,private route: ActivatedRoute,) { }
//   cateoryList=[
//     {id:1,name:"juice",body:"orange"},
//     {id:2,name:"banana",body:"batekh"},
//     {id:3,name:"orange",body:"farouka"},
//     {id:4,name:"red",body:"orange"},
// ]
cateoryList:any;
// editcat:any;
NavigateToEdit(id:any){
  this.router.navigate(['/editCategory/',{id:id}]);
  // this.categoryService.getCategoryById(id).subscribe(data=>{
  //          this.editcat=data;
  // })
  console.log(id);
}
NavigateToDelete(id:any){
  // this.router.navigate(['/deleteCategory/'+{id}]);
  // console.log(id);
  this.confirmDeleteService.openConfirmDialog().afterClosed().subscribe(res=>{
    if(res==true){
      this.categoryService.deleteCategory(id).subscribe(data=>{
        console.log(data);
      },error=>{
        console.log(error);
      })
    }
  })
}
NavigateToAdd(){
  this.router.navigate(['/addCategory']);
}
  ngOnInit(): void {
    this.categoryService.showCategory().subscribe(data=>{
      this.cateoryList=data
   })
  }

}
