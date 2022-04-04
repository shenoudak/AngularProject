import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
import { Product } from 'src/app/shared_classes_intefaces/peoduct';
import { CategoryService } from '../productService/category.service';
import { ProductService } from '../productService/product.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit {

  constructor(private router:Router,private dialogService:ConfirmDeleteService,private productService:ProductService,private categoryService:CategoryService ) { }
  categoryList:string[]=[];
  displayedColumns: string[] = ['name','description','miniAmount','barcode','purchasingPrice','sellingPrice','expiryPeriod','CatName','actions'];
  dataSource:Product[]=[];
    ngOnInit(): void {
      this.productService.getAll().subscribe(data=>{
        this.dataSource=data;
        for(let element of this.dataSource){
          this.categoryService.getByID(element.categoryId).subscribe(res=>{
            this.categoryList.push(res.name);
          },error=>console.log(error));
        }
      },error=>console.log(error))
  }
  navigateToAddProduct(){
    this.router.navigate(['/home/product/addProduct']);
  }
  NavigationToEditProduct(id:number){
    this.router.navigate(['/home/product/editProduct',{id:id}]);
    console.log(id);
  }
  deleteProduct(id:number){
    this.dialogService.openConfirmDialog().afterClosed().subscribe(res=>{
      if(res==true){
        this.productService.removeD(id).subscribe(res=>{
          this.productService.getAll().subscribe(data=>{
            this.dataSource=data;
          },error=>console.log(error))
          console.log('delete successfully');
        },error=>{
          console.log(error);
        });
      }
    });
  }

 


}
