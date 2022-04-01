import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseBill } from 'src/app/shared_classes_intefaces/purchaseBill';
import { PurchaseProduct } from 'src/app/shared_classes_intefaces/purchaseProduct';
import { PaymentMethodService } from 'src/payment-method/payment-method.service';
import { ProductService } from 'src/product/productService/product.service';
import { StockService } from 'src/stock/stock/stock.service';
import { SupplierService } from 'src/supplier/supplier.service';
import { TaxService } from 'src/taxes/taxService/tax.service';
import { PurchaseBillService } from '../services/purchase-bill.service';

@Component({
  selector: 'app-show-purchase-bill',
  templateUrl: './show-purchase-bill.component.html',
  styleUrls: ['./show-purchase-bill.component.scss']
})
export class ShowPurchaseBillComponent implements OnInit {
  constructor(private fb:FormBuilder,private activateRoute:ActivatedRoute,private paymentMethodService:PaymentMethodService,private taxService:TaxService,private supplierService:SupplierService,private router:Router,private purchaseProductService:PurchaseBillService,private purchaseBillService:PurchaseBillService,private productService:ProductService) {
   
  }
  purchaseProductList:PurchaseProduct[]=[];
  purchaseCode:any;
  taxValue:any=0;
  discount:any;
  purchaseBill:PurchaseBill={} as PurchaseBill;
  purchaseBillId:any;
  purchaseBillTotalPrice:any;
  productNamesList:any[]=[];
  productTotalPriceList:any[]=[];
  date:any;
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params=>{
      this.purchaseBillId=params.get('id');
       this.purchaseBillService.getByID(this.purchaseBillId).subscribe(data=>{
       this.purchaseBill=data;
       console.log(data);
       this.purchaseCode=this.purchaseBill.billCode;
       this.purchaseBillTotalPrice=this.purchaseBill.billTotal;
       this.discount=this.purchaseBillTotalPrice*this.purchaseBill.discount*0.1;
       this.date=data.date;
      this.taxService.getByID(this.purchaseBill.taxId).subscribe(data=>{
       // this.taxValue=(this.totalPriceOfPurchase* data.percentage)*.01;
      }

       
      )
       for(let element of this.purchaseBill.purchaseproducts){
         console.log(element);
         this.purchaseProductList.push(element);
         this.productService.getByID(element.productId).subscribe(data=>{
           this.productNamesList.push(data.name);
          
         },error=>console.log(error));
       }
       console.log(this.productNamesList);
       

      },error=>console.log(error));
     
    },error=>console.log(error));
  }
}
 
  