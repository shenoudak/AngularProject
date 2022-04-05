import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
import { Product } from 'src/app/shared_classes_intefaces/peoduct';
import { Stock } from 'src/app/shared_classes_intefaces/stock';
import { ProductService } from 'src/product/productService/product.service';
import { StockProductService } from '../services/stock-product.service';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-show-stock-product',
  templateUrl: './show-stock-product.component.html',
  styleUrls: ['./show-stock-product.component.scss']
})
export class ShowStockProductComponent implements OnInit {

  stock:Stock={} as Stock;
  product:Product={} as Product;
  displayedColumns: string[] = ['product', 'stock','amount','prodDate',"actions"];
  dataSource:any=[];
  constructor(private router:Router,private productService:ProductService,private dialogService:ConfirmDeleteService,private stockService:StockService,private stockProductService:StockProductService ) { }
  customerList:any[]=[];
  stockListName:any[]=[];
 productListName:any[]=[];
  ngOnInit(): void {
    this.stockProductService.getAll().subscribe(data=>{
      this.dataSource=data;
      for(let element of this.dataSource){
         this.stockService.getByID(element.stockId).subscribe(res=>{
         this.stock=res;
         this.stockListName.push(this.stock.name);
        
       },error=>console.log(error));
       this.productService.getByID(element.productId).subscribe(data=>{
        this.product=data;
        this.productListName.push(this.product.name);
        console.log(data);
       })
      }
      console.log(this.customerList);
    },error=>{
      console.log(error);
    })
  }
  navigateToAddStockProduct(){
    this.router.navigate(['/home/stock/addStockProduct']);
  }
  NavigationToStockProduct(id:number){
    this.router.navigate(['/home/stock/editStockProduct',{id:id}]);
    console.log(id);
  }
  deleteStockProduct(id:number){
    this.dialogService.openConfirmDialog().afterClosed().subscribe(res=>{
      if(res==true){
        this.stockProductService.removeD(id).subscribe(res=>{
          console.log('delete successfully');
          this.stockProductService.getAll().subscribe(data=>{
            this.customerList=data;
            this.dataSource=this.customerList;
          },error=>{console.log(error)});
        },error=>{
          console.log(error);
        });
      }
    });
  }


}
