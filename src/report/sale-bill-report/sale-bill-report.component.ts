import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/shared_classes_intefaces/peoduct';
import { SaleBill } from 'src/app/shared_classes_intefaces/saleBill';
import { SaleBillProduct } from 'src/app/shared_classes_intefaces/saleBillProduct';
import { ProductService } from 'src/product/productService/product.service';
import { SaleBillService } from 'src/sales/services/sale-bill.service';
import { TaxService } from 'src/taxes/taxService/tax.service';

@Component({
  selector: 'app-sale-bill-report',
  templateUrl: './sale-bill-report.component.html',
  styleUrls: ['./sale-bill-report.component.scss']
})
export class SaleBillReportComponent implements OnInit {

  constructor(private fb:FormBuilder,private taxService:TaxService,private saleBillService:SaleBillService,private productService:ProductService) { }

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
saleProductList:SaleBillProduct[]=[];
billId:any;
saleBill:SaleBill={} as SaleBill;
calacTotalOfPro:number=0;
productNamesList:Product[]=[]
purchaseCode:any;
saleBillTotalPrice:any;
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
  
  this.saleBillService.getSaleProductsByBillCod(this.BillCode?.value).subscribe(data=>{
    this.saleProductList=data;
    console.log(data);
    if(this.saleProductList.length==0){
      this.show=false;
    }
    else{
      this.show=true;
    }
    
    for(let element of this.saleProductList){
      this.calacTotalOfPro=this.calacTotalOfPro+element.totalPrice;
      console.log(element.productId);
      this.productService.getByID(element.productId).subscribe(res=>{
        this.productNamesList.push(res);
        console.log(this.productNamesList);
      },error=>console.log(error)
      );
    }
    console.log(this.saleProductList);
    this.billId=this.saleProductList[0].saleBillId;
    this.saleBillService.getByID(this.billId).subscribe(res=>{
      this.saleBill=res;
      this.purchaseCode=this.saleBill.billCode;
    this.saleBillTotalPrice=this.saleBill.billTotalPrice;
    this.discount=this.saleBillTotalPrice*this.saleBill.discount*0.01;
    this.date=this.saleBill.date;
    this.paidUp=this.saleBill.paidup;
    this.remaining=this.saleBill.remaining;
   this.taxService.getByID(this.saleBill.taxId).subscribe(data=>{
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



}
