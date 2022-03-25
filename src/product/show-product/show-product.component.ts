import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
import { Product } from 'src/app/shared_classes_intefaces/peoduct';
import { ProductService } from '../productService/product.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit {

  constructor(private router:Router,private dialogService:ConfirmDeleteService,private productService:ProductService ) { }
  productList:Product[]=
  [
    {ID:1,Name:'Product1',Barcode:'bar1',Description:'des1',ExpiryPeriod:3,MiniAmount:100,SellingPrice:100,PurchasingPrice:80,CategoryId:1},
    {ID:2,Name:'Product2',Barcode:'bar2',Description:'des2',ExpiryPeriod:2,MiniAmount:200,SellingPrice:200,PurchasingPrice:120,CategoryId:2},
    {ID:3,Name:'Product3',Barcode:'bar3',Description:'des3',ExpiryPeriod:1,MiniAmount:300,SellingPrice:200,PurchasingPrice:280,CategoryId:3},
  ]
    ngOnInit(): void {
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
          console.log('delete successfully');
        },error=>{
          console.log(error);
        });
      }
    });
  }

 


}
