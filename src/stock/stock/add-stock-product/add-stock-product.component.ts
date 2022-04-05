import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared_classes_intefaces/peoduct';
import { Stock } from 'src/app/shared_classes_intefaces/stock';
import { StockProduct } from 'src/app/shared_classes_intefaces/stockProduct';
import { ProductService } from 'src/product/productService/product.service';
import { StockProductService } from '../services/stock-product.service';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-add-stock-product',
  templateUrl: './add-stock-product.component.html',
  styleUrls: ['./add-stock-product.component.scss']
})
export class AddStockProductComponent implements OnInit {

  constructor(private fb:FormBuilder,private stockService:StockService,private productService:ProductService,private router:Router,private stockProductService:StockProductService) { }
  stockList:Stock[]=[];
  productList:Product[]=[];
  ngOnInit(): void {
    this.stockService.getAll().subscribe(data=>{
      this.stockList=data;
      console.log(this.stockList);
    },error=>{
      console.log(error);
    })
    this.productService.getAll().subscribe(data=>{
      this.productList=data;
      console.log(this.productList);
    },error=>{
      console.log(error);
    })
  }
  get ProductionDate(){  
    return this.registrationForm.get('ProductionDate');
   }
  
   get Amount(){  
    return this.registrationForm.get('Amount');
   }
   get StockId(){  
    return this.registrationForm.get('StockId');
   }
   get ProductId(){  
    return this.registrationForm.get('ProductId');
   }
   
   
   registrationForm=this.fb.group(
     {
      ProductionDate:['',[Validators.required]],
      Amount:[0,[Validators.pattern('^[0-9]+$')]],
      StockId:['',Validators.required],
      ProductId:['',Validators.required]
     }
   );
   stockProduct:any;
    SaveData(){
      //parseInt(this.TypeId?.value);
      this.stockProduct=new StockProduct(this.Amount?.value,this.ProductionDate?.value,this.StockId?.value,this.ProductId?.value);
      this.stockProductService.insert(this.stockProduct).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/home/stock/showStockProduct']);
      },error=>{
        console.log(error);
      });
      
      console.log(this.stockProduct);
}


}
