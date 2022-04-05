import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SaleBill } from 'src/app/shared_classes_intefaces/saleBill';
import { SaleBillProduct } from 'src/app/shared_classes_intefaces/saleBillProduct';
import { ProductService } from 'src/product/productService/product.service';
import { TaxService } from 'src/taxes/taxService/tax.service';
import { SaleBillService } from '../services/sale-bill.service';

@Component({
  selector: 'app-preview-sale-bill',
  templateUrl: './preview-sale-bill.component.html',
  styleUrls: ['./preview-sale-bill.component.scss']
})
export class PreviewSaleBillComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute,private taxService:TaxService,private saleBillService:SaleBillService,private productService:ProductService) {
   
  }

  header:any="Sale INVOICE "
  saleProductList:SaleBillProduct[]=[];
  saleBillCode:any;
  taxValue:any=0;
  discount:any;
  TotalBillADT:any;
  saleBill:SaleBill={} as SaleBill;
  saleBillId:any;
  saleBillTotalPrice:any;
  productNamesList:any[]=[];
  productTotalPriceList:any[]=[];
  calacTotalOfPro:number=0;
  date:any;
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params=>{
      this.saleBillId=params.get('id');
       this.saleBillService.getByID(this.saleBillId).subscribe(data=>{
       this.saleBill=data;
       this.saleBillService.getSaleProducts(this.saleBillId).subscribe(data=>{
        this.saleProductList=data;
        for(let element of this.saleProductList){
          this.calacTotalOfPro=this.calacTotalOfPro+element.totalPrice;
          this.productService.getByID(element.productId).subscribe(res=>{
            this.productNamesList.push(res.name);
          },error=>{
            console.log(error);
          });
        }
       console.log(data);
       this.saleBillCode=this.saleBill.billCode;
       this.saleBillTotalPrice=this.saleBill.billTotalPrice;
       this.discount=this.saleBillTotalPrice*this.saleBill.discount*0.01;
       this.date=this.saleBill.date;
      this.taxService.getByID(this.saleBill.taxId).subscribe(data=>{
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
 