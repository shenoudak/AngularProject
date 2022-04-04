import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/shared_classes_intefaces/peoduct';
import { PurchaseBill } from 'src/app/shared_classes_intefaces/purchaseBill';
import { PurchaseProduct } from 'src/app/shared_classes_intefaces/purchaseProduct';
import { ProductService } from 'src/product/productService/product.service';
import { PurchaseBillService } from 'src/purchase/services/purchase-bill.service';
import { TaxService } from 'src/taxes/taxService/tax.service';

@Component({
  selector: 'app-purcase-bill',
  templateUrl: './purcase-bill.component.html',
  styleUrls: ['./purcase-bill.component.scss']
})
export class PurcaseBillComponent implements OnInit {

  constructor(private fb:FormBuilder,private purchseBillService:PurchaseBillService,private productService:ProductService,private taxService:TaxService) { }

  ngOnInit(): void {
    
  }
  get BillCode(){  
    return this.InvoiceForm.get('BillCode');
   }
  InvoiceForm=this.fb.group
(
    {
      BillCode:['',[Validators.required]],

   }
)
purchseProductList:PurchaseProduct[]=[];
billId:any;
purchaseBill:PurchaseBill={} as PurchaseBill;
calacTotalOfPro:number=0;
productNamesList:Product[]=[]
purchaseCode:any;
purchaseBillTotalPrice:any;
discount:any;
date:any;
TotalBillADT:any;
taxValue:any;
isFound=false;
isClicked=false;
show:boolean=false;
remaining:any;
paidUp:any;
ShowInvoice()
{
  
  this.purchseBillService.getPurchaseProductsByBillCod(this.BillCode?.value).subscribe(data=>{
    this.purchseProductList=data;
    console.log(data);
    if(this.purchseProductList.length==0){
      this.show=false;
    }
    else{
      this.show=true;
    }
    
    for(let element of this.purchseProductList){
      this.calacTotalOfPro=this.calacTotalOfPro+element.totalPrice;
      console.log(element.productId);
      this.productService.getByID(element.productId).subscribe(res=>{
        this.productNamesList.push(res);
        console.log(this.productNamesList);
      },error=>console.log(error)
      );
    }
    console.log(this.purchseProductList);
    this.billId=this.purchseProductList[0].purchaseBillId;
    this.purchseBillService.getByID(this.billId).subscribe(res=>{
      this.purchaseBill=res;
      this.purchaseCode=this.purchaseBill.billCode;
    this.purchaseBillTotalPrice=this.purchaseBill.billTotal;
    this.discount=this.purchaseBillTotalPrice*this.purchaseBill.discount*0.01;
    this.date=this.purchaseBill.date;
    this.paidUp=this.purchaseBill.paidup;
    this.remaining=this.purchaseBill.remaining;
   this.taxService.getByID(this.purchaseBill.taxId).subscribe(data=>{
     this.taxValue=(this.calacTotalOfPro* data.percentage)*.01;
     this.TotalBillADT=this.calacTotalOfPro+this.taxValue-this.discount;
   },error=>{
     console.log(error);
   }
   
    
   )
    },
    error=>{
      console.log(error);
    }
    )
    
   
  },error=>{
    this.show=false;
    console.log(error);
    
  })
  

}
resetValues(){
  this.purchseProductList=[];
this.billId=0;
this.purchaseBill={} as PurchaseBill;
this.calacTotalOfPro=0;
this.productNamesList=[]
this.purchaseCode=0;
this.purchaseBillTotalPrice=0;
this.discount=0
this.date="";
this.TotalBillADT=0
this.taxValue=0
}

 

}
