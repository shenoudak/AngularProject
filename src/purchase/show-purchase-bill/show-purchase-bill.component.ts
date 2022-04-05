import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseBill } from 'src/app/shared_classes_intefaces/purchaseBill';
import { PurchaseProduct } from 'src/app/shared_classes_intefaces/purchaseProduct';
import { PaymentMService } from 'src/payment/services/payment-m.service';
import { ProductService } from 'src/product/productService/product.service';
import { SupplierService } from 'src/stock/stock/services/supplier.service';
import { TaxService } from 'src/taxes/taxService/tax.service';
import { PurchaseBillService } from '../services/purchase-bill.service';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

@Component({
  selector: 'app-show-purchase-bill',
  templateUrl: './show-purchase-bill.component.html',
  styleUrls: ['./show-purchase-bill.component.scss']
})
export class ShowPurchaseBillComponent implements OnInit {
  constructor(private fb:FormBuilder,private activateRoute:ActivatedRoute,private paymentMethodService:PaymentMService,private taxService:TaxService,private supplierService:SupplierService,private router:Router,private purchaseProductService:PurchaseBillService,private purchaseBillService:PurchaseBillService,private productService:ProductService) {
   
  }
  header:any="Purchase INVOICE "
  purchaseProductList:PurchaseProduct[]=[];
  purchaseCode:any;
  taxValue:any=0;
  discount:any;
  TotalBillADT:any;
  purchaseBill:PurchaseBill={} as PurchaseBill;
  purchaseBillId:any;
  purchaseBillTotalPrice:any;
  productNamesList:any[]=[];
  productTotalPriceList:any[]=[];
  calacTotalOfPro:number=0;
  date:any;
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params=>{
      this.purchaseBillId=params.get('id');
       this.purchaseBillService.getByID(this.purchaseBillId).subscribe(data=>{
       this.purchaseBill=data;
       this.purchaseBillService.getPurchaseProducts(this.purchaseBillId).subscribe(data=>{
        this.purchaseProductList=data;
        for(let element of this.purchaseProductList){
          this.calacTotalOfPro=this.calacTotalOfPro+element.totalPrice;
          this.productService.getByID(element.productId).subscribe(res=>{
            this.productNamesList.push(res.name);
          },error=>{
            console.log(error);
          });
        }
       console.log(data);
       this.purchaseCode=this.purchaseBill.billCode;
       this.purchaseBillTotalPrice=this.purchaseBill.billTotal;
       this.discount=this.purchaseBillTotalPrice*this.purchaseBill.discount*0.01;
       this.date=this.purchaseBill.date;
       this.taxService.getByID(this.purchaseBill.taxId).subscribe(data=>{
        this.taxValue=(this.calacTotalOfPro* data.percentage)*.01;
        this.TotalBillADT=this.calacTotalOfPro+this.taxValue-this.discount;
      },error=>{
        console.log(error);
      }
      
       
      )
      
       console.log(this.productNamesList);
       

      },error=>console.log(error));
     
    },error=>console.log(error));
  });
}

 
//   public openPDF(): void {
//     let DATA: any = document.getElementById('htmlData');
//     html2canvas(DATA).then((canvas) => {
//       let fileWidth = 208;
//       let fileHeight = (canvas.height * fileWidth) / canvas.width;
//       const FILEURI = canvas.toDataURL('image/png');
//       let PDF = new jsPDF('p', 'mm', 'a4');
//       let position = 0;
//       PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
//       PDF.save('angular-demo.pdf');
//     });
//   }
// }
  }
 
  