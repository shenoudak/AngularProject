import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared_classes_intefaces/peoduct';
import { PurchaseProduct } from 'src/app/shared_classes_intefaces/purchaseProduct';
import { ReturnSaleBill } from 'src/app/shared_classes_intefaces/returnSaleBill';
import { ReturnSaleProduct } from 'src/app/shared_classes_intefaces/returnSaleProduct';
import { SaleBill } from 'src/app/shared_classes_intefaces/saleBill';
import { SaleBillProduct } from 'src/app/shared_classes_intefaces/saleBillProduct';
import { Tax } from 'src/app/shared_classes_intefaces/tax';
import { CustomerService } from 'src/Customer/customer/customerService/customer.service';
import { PaymentMService } from 'src/payment/services/payment-m.service';
import { ProductService } from 'src/product/productService/product.service';
import { StockService } from 'src/stock/stock/stock.service';
import { TaxService } from 'src/taxes/taxService/tax.service';
import { ReturnSaleBillService } from '../services/return-sale-bill.service';
import { SaleBillService } from '../services/sale-bill.service';
import { SaleProductService } from '../services/sale-product.service';

@Component({
  selector: 'app-add-return-sale-bill',
  templateUrl: './add-return-sale-bill.component.html',
  styleUrls: ['./add-return-sale-bill.component.scss']
})
export class AddReturnSaleBillComponent implements OnInit {

  header: string = "Sale Return Bill ";
  dataSource: any[] = [];
  productlengthEqualZero: boolean = true;
  displayedColumns: string[] = ['productName','amount', 'discount', 'totalPrice', 'actions']
  tooglePurchaseProductForm: boolean = true;
  stockList: any = [];
  supplierList: any = [];
  productList: any = [];
  paymentMList: any = [];
  taxList: any = [];
  listTest: any[] = [];
  maxDate: Date;
  dateToDay: any;
  purchaseProList: any[] = [];
  constructor(private fb: FormBuilder,private datePipe:DatePipe,private returnSaleBService:ReturnSaleBillService,private returnSPService:ReturnSaleBillService, private paymentMethodService: PaymentMService, private taxService: TaxService, private customerService: CustomerService, private stockService: StockService, private router: Router, private productService: ProductService, private saleBillService: SaleBillService,private saleProductService:SaleProductService) {
    const currentYear = new Date().getFullYear();
    const today = new Date();
    this.dateToDay = today;
    const month = today.getMonth();
    const year = today.getFullYear();
    const day = today.getDay();
    //this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(year, month, day + 1);
  }
  taxesList:Tax[]=[];
  paymentList:any[]=[];
  deletedElementLength:number=0;
  ngOnInit(): void {
    this.taxService.getAll().subscribe(data=>{
      this.taxesList=data;
    },error=>console.log(error));
    this.paymentMethodService.getAll().subscribe(data=>{
      this.paymentList=data;
    },error=>console.log(error));
  }
  show: boolean = false;
  saleProductList: SaleBillProduct[] = [];
  billId: any;
  saleBill: SaleBill = {} as SaleBill;
  calacTotalOfPro: number = 0;
  productNamesList: Product[] = []
  purchaseCode: any;
  purchaseBillTotalPrice: any;
  discount: any;
  date: any;
  TotalBillADT: any;
  taxValue: any;
  isFound = false;
  isClicked = false;
  remaining: any;
  paidUp: any;
  customer: any;
  stock: any;
  billType: any;
  billCode: any;
  saleListProdToDel:any[]=[];
  saleProductDeletedList:SaleBillProduct[]=[];
  purchaseProductObj:SaleBillProduct={}as SaleBillProduct;
  ShowInvoice() {
    
    this.billCode = this.BillCode?.value;
    this.saleBillService.getSaleProductsByBillCod(this.BillCode?.value).subscribe(data => {
      this.saleProductList = data;
      console.log(data);
      if (this.saleProductList.length == 0) {
        this.show = false;
      }
      else {
        this.show = true;
      }
      
      for (let element of this.saleProductList) {
        this.purchaseProductObj=new SaleBillProduct(element.amountToSell,element.discount,element.totalPrice,element.productId);
        this.purchaseProductObj.id=element.id;
        this.saleListProdToDel.push(this.purchaseProductObj);
        this.calacTotalOfPro = this.calacTotalOfPro + element.totalPrice;
        console.log(element.productId);
        this.productService.getByID(element.productId).subscribe(res => {
          this.productNamesList.push(res);
          console.log(this.productNamesList);
        }, error => console.log(error)
        );
      }
      this.dataSource=this.saleProductList;
      this.billId = this.saleProductList[0].saleBillId;
      this.saleBillService.getByID(this.billId).subscribe(res => {
        this.saleBill = res;
        this.purchaseCode = this.saleBill.billCode;
        this.purchaseBillTotalPrice = this.saleBill.billTotalPrice;
        this.discount = this.purchaseBillTotalPrice * this.saleBill.discount * 0.01;
        this.date = this.saleBill.date;
        this.billType = this.saleBill.billType;
        this.paidUp = this.saleBill.paidup;
        this.remaining = this.saleBill.remaining;
        this.customerService.getByID(this.saleBill.clientId).subscribe(data => {
          this.customer = data.name;
        }, error => { console.log(error) });
        this.stockService.getByID(this.saleBill.stockId).subscribe(data => {
          this.stock = data.name;
        }, error => { console.log(error) });
        this.taxService.getByID(this.saleBill.taxId).subscribe(data => {
          this.taxValue = (this.calacTotalOfPro * data.percentage) * .01;
          this.TotalBillADT = this.calacTotalOfPro + this.taxValue - this.discount;
        }, error => {
          console.log(error);
        }



        )
      },
        error => {
          console.log(error);
        }
      )


    }, error => {
      this.show = false;
      console.log(error);

    })


  }
  get BillCode() {
    return this.InvoiceForm.get('BillCode');
  }
  InvoiceForm = this.fb.group
    (
      {
        BillCode: ['', [Validators.required]],

      }
    )
    get TaxId() {
      return this.registerReturnBill.get('TaxId');
    }
      get PaymentMethodId() {
      return this.registerReturnBill.get('PaymentMethodId');
     }
       get NetMoney() {
     return this.registerReturnBill.get('NetMoney');
     }
    registerReturnBill = this.fb.group
    (
      {
        TaxId: ['', [Validators.required]],
        PaymentMethodId: ['', [Validators.required]],
        NetMoney: ['', [Validators.required]],

      }
    )
   
      purchaseObjDeleted:PurchaseProduct={}as PurchaseProduct;
      countTotalPriceReturnProd:number=0;
      anotherList:any[]=[];
      /*
       addProductToList() {
    this.totalPriceOfProduct = (parseInt(this.Price?.value) * parseInt(this.Amount?.value)) - ((parseInt(this.Discount?.value) * .01 * parseInt(this.Price?.value) * parseInt(this.Amount?.value)));
    this.purchaseProduct = new PurchaseProduct(this.Amount?.value, this.Discount?.value, this.totalPriceOfProduct, this.ProdId?.value);
    this.purchaseProList.push(this.purchaseProduct);
    this.blockFunction();
    this.productlengthEqualZero = false;
    this.dataSource = this.purchaseProList;
    this.tooglePurchaseProductForm = !this.tooglePurchaseProductForm;
  }
  deletePurchaseProduct(index: number) {
    if (index !== -1) {
      this.purchaseProList.splice(index, 1);
      if (this.purchaseProList.length == 0) {
        this.productlengthEqualZero = true;
        this.resertValuesAfterDeleteAllProduct();
      }
      this.dataSource = this.purchaseProList;
      this.tooglePurchaseProductForm = !this.tooglePurchaseProductForm;
    }
  }
      */ 
    isDeleted:boolean=false;
      deletePurchaseProduct(index: number,id:number) {
        this.dataSource=this.saleListProdToDel;
     if (index !== -1) {
      console.log("index= "+index);
      console.log("ID= "+id);
      console.log("Sale ProductList= "+this.saleProductList);
      this.saleListProdToDel= this.saleListProdToDel.splice(index, 1); 
      this.isDeleted=true;
        this.saleProductService.getByID(id).subscribe(data=>{
           this.saleProductDeletedList.push(data);
           this.countTotalPriceReturnProd=this.countTotalPriceReturnProd+data.totalPrice;
           console.log("Deleted Product"+this.saleProductDeletedList);
          },
          error=>console.log(error));
   }
  }
   taxObj:any;
   netMoney:number=0;
    taxChanged(){
     console.log();
     this.taxService.getByID(this.TaxId?.value).subscribe(data=>{
       this.taxObj=data;
       console.log(this.taxObj);
       this.taxValue=(this.TotalBillADT*this.taxObj.percentage)*.01;
       this.netMoney=this.remaining-this.taxValue;
       this.registerReturnBill.get("NetMoney")?.patchValue(this.netMoney);
       console.log(this.taxValue);
     },error=>{
       console.log(error);
     })
  }
  returnSB:ReturnSaleBill={} as ReturnSaleBill;
  returnSProduct:ReturnSaleProduct={} as ReturnSaleProduct;
  returnSProductList:ReturnSaleProduct[]=[];
  changeDataFormat:any;
  addReturnSaleBill(){
    for(let element of this.saleProductDeletedList)
    {
      this.returnSProduct=new ReturnSaleProduct(element.totalPrice,element.id);
      this.returnSProductList.push(this.returnSProduct);
    }
    console.log(this.billId);
    this.changeDataFormat = this.datePipe.transform(this.dateToDay, 'yyyy-MM-dd')
    this.returnSB=new ReturnSaleBill(this.billCode+"",this.changeDataFormat,this.NetMoney?.value,this.TaxId?.value,this.PaymentMethodId?.value,this.billId);
    this.returnSB.returnSaleProducts=this.returnSProductList;
    this.returnSPService.insert(this.returnSB).subscribe(data=>{
      console.log(this.returnSB)
      console.log(data)
     
    },error=>console.log(error));
   
  }


}
