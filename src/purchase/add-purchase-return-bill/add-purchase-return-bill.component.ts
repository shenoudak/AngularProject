import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared_classes_intefaces/peoduct';
import { PurchaseBill } from 'src/app/shared_classes_intefaces/purchaseBill';
import { PurchaseProduct } from 'src/app/shared_classes_intefaces/purchaseProduct';
import { ReturnPurchaseBill } from 'src/app/shared_classes_intefaces/returnPurchaseBill';
import { ReturnPurchaeProduct } from 'src/app/shared_classes_intefaces/returnPurchaseProduct';
import { Tax } from 'src/app/shared_classes_intefaces/tax';
import { PaymentMService } from 'src/payment/services/payment-m.service';
import { ProductService } from 'src/product/productService/product.service';
import { SupplierService } from 'src/stock/stock/services/supplier.service';
import { StockService } from 'src/stock/stock/stock.service';
import { TaxService } from 'src/taxes/taxService/tax.service';
import { PurchaseBillService } from '../services/purchase-bill.service';
import { PurchaseProductService } from '../services/purchase-product.service';
import { ReturnPurchaseBillService } from '../services/return-purchase-bill.service';
import { ReturnPurchaseProductService } from '../services/return-purchase-product.service';

@Component({
  selector: 'app-add-purchase-return-bill',
  templateUrl: './add-purchase-return-bill.component.html',
  styleUrls: ['./add-purchase-return-bill.component.scss']
})
export class AddPurchaseReturnBillComponent implements OnInit {

  header: string = "Purchase Return Bill ";
  dataSource: any[] = [];
  productlengthEqualZero: boolean = true;
  displayedColumns: string[] = ['productName', 'amount', 'discount', 'totalPrice', 'actions']
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
  constructor(private fb: FormBuilder, private datePipe: DatePipe, private returnPurchaseBService: ReturnPurchaseBillService, private returnPPService: ReturnPurchaseProductService, private paymentMethodService: PaymentMService, private taxService: TaxService, private supplierService: SupplierService, private stockService: StockService, private router: Router, private productService: ProductService, private purchaseBillService: PurchaseBillService, private purchaseProductService: PurchaseProductService) {
    const currentYear = new Date().getFullYear();
    const today = new Date();
    this.dateToDay = today;
    const month = today.getMonth();
    const year = today.getFullYear();
    const day = today.getDay();
    //this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(year, month, day + 1);
  }
  taxesList: Tax[] = [];
  paymentList: any[] = [];
  ngOnInit(): void {
    this.taxService.getAll().subscribe(data => {
      this.taxesList = data;
    }, error => console.log(error));
    this.paymentMethodService.getAll().subscribe(data => {
      this.paymentList = data;
    }, error => console.log(error));
  }
  show: boolean = false;
  purchseProductList: PurchaseProduct[] = [];
  billId: any;
  purchaseBill: PurchaseBill = {} as PurchaseBill;
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
  supplier: any;
  stock: any;
  billType: any;
  billCode: any;
  purchaseListProdToDel: any[] = [];
  purchaseProductDeletedList: PurchaseProduct[] = [];
  purchaseProductObj: PurchaseProduct = {} as PurchaseProduct;
  ShowInvoice() {
    this.billCode = this.BillCode?.value;
    this.purchaseBillService.getPurchaseProductsByBillCod(this.BillCode?.value).subscribe(data => {
      this.purchseProductList = data;
      console.log(data);
      if (this.purchseProductList.length == 0) {
        this.show = false;
      }
      else {
        this.show = true;
      }

      for (let element of this.purchseProductList) {
        this.purchaseProductObj = new PurchaseProduct(element.amount, element.discount, element.totalPrice, element.productId);
        this.purchaseProductObj.id = element.id;
        this.purchaseListProdToDel.push(this.purchaseProductObj);
        this.calacTotalOfPro = this.calacTotalOfPro + element.totalPrice;
        console.log(element.productId);
        this.productService.getByID(element.productId).subscribe(res => {
          this.productNamesList.push(res);
          console.log(this.productNamesList);
        }, error => console.log(error)
        );
      }
      this.dataSource = this.purchseProductList;
      console.log(this.purchseProductList);
      this.billId = this.purchseProductList[0].purchaseBillId;
      this.purchaseBillService.getByID(this.billId).subscribe(res => {
        this.purchaseBill = res;
        this.purchaseCode = this.purchaseBill.billCode;
        this.purchaseBillTotalPrice = this.purchaseBill.billTotal;
        this.discount = this.purchaseBillTotalPrice * this.purchaseBill.discount * 0.01;
        this.date = this.purchaseBill.date;
        this.billType = this.purchaseBill.billType;
        this.paidUp = this.purchaseBill.paidup;
        this.remaining = this.purchaseBill.remaining;
        this.supplierService.getByID(this.purchaseBill.supplierId).subscribe(data => {
          this.supplier = data.name;
        }, error => { console.log(error) });
        this.stockService.getByID(this.purchaseBill.stockId).subscribe(data => {
          this.stock = data.name;
        }, error => { console.log(error) });
        this.taxService.getByID(this.purchaseBill.taxId).subscribe(data => {
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

  purchaseObjDeleted: PurchaseProduct = {} as PurchaseProduct;
  countTotalPriceReturnProd: number = 0;
  isDeleted: boolean = false;
  deletePurchaseProduct(index: number, id: number) {
    this.dataSource = this.purchaseListProdToDel;

    if (index !== -1) {
      console.log("well delete");
      this.purchaseListProdToDel = this.purchaseListProdToDel.splice(index, 1);
      this.isDeleted = true;
      this.purchaseProductService.getByID(id).subscribe(data => {
        this.purchaseProductDeletedList.push(data);
        this.countTotalPriceReturnProd = this.countTotalPriceReturnProd + data.totalPrice;
        console.log("Deleted Product" + this.purchaseProductDeletedList);
      },
        error => console.log(error));
    }
  }
  /*
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
  */
  //   this.purchseProductList.forEach((value,index)=>{
  //     if(value.id==id){
  //       this.purchseProductList=this.purchseProductList.splice(index,1);
  //      this.dataSource=this.purchseProductList;
  //     }
  // });

  taxObj: any;
  netMoney: number = 0;
  taxChanged() {
    console.log();
    this.taxService.getByID(this.TaxId?.value).subscribe(data => {
      this.taxObj = data;
      console.log(this.taxObj);
      this.taxValue = (this.TotalBillADT * this.taxObj.percentage) * .01;
      this.netMoney = this.remaining - this.taxValue;
      this.registerReturnBill.get("NetMoney")?.patchValue(this.netMoney);
      console.log(this.taxValue);
    }, error => {
      console.log(error);
    })
  }
  returnPB: ReturnPurchaseBill = {} as ReturnPurchaseBill;
  returnPProduct: ReturnPurchaeProduct = {} as ReturnPurchaeProduct;
  returnPProductList: ReturnPurchaeProduct[] = [];
  changeDataFormat: any;
  addReturnPurchaseBill() {
    for (let element of this.purchaseProductDeletedList) {
      this.returnPProduct = new ReturnPurchaeProduct(element.totalPrice, element.id);
      this.returnPProductList.push(this.returnPProduct);
    }
    console.log(this.billId);
    this.changeDataFormat = this.datePipe.transform(this.dateToDay, 'yyyy-MM-dd')
    this.returnPB = new ReturnPurchaseBill(this.billCode + "", this.changeDataFormat, this.NetMoney?.value, this.TaxId?.value, this.PaymentMethodId?.value, this.billId);
    this.returnPB.returnPurchaseProducts = this.returnPProductList;
    this.returnPurchaseBService.insert(this.returnPB).subscribe(data => {
      console.log(this.returnPB)
      console.log(data)

    }, error => console.log(error));

  }

  // ngOnInit(): void {
  //   this.getRandomInt();
  //   this.purchaseBillService.getAll().subscribe(data=>{
  //     this.listTest=data;
  //   })
  //   this.dataSource = this.purchaseProList;
  //   this.productService.getAll().subscribe(data => {
  //     this.productList = data;
  //   }, error => {
  //     console.log(error);
  //   })
  //   this.stockService.getAll().subscribe(data => {
  //     this.stockList = data;
  //     console.log(this.stockList);
  //   }, error => {
  //     console.log(error);
  //   });
  //   this.supplierService.getAll().subscribe(data => {
  //     this.supplierList = data;
  //   }, error => {
  //     console.log(error);
  //   })
  //   this.taxService.getAll().subscribe(data => {
  //     this.taxList = data;
  //   }, error => {
  //     console.log(error);
  //   })
  //   this.paymentMethodService.showPaymentMethod().subscribe(data => {
  //     this.paymentMList = data;
  //   }, error => {
  //     console.log(error);
  //   })
  // }
  // get Amount() {
  //   return this.registrationForm.get('Amount');
  // }

  // get Discount() {
  //   return this.registrationForm.get('Discount');
  // }
  // get Price() {
  //   return this.registrationForm.get('Price');
  // }
  // get ProdId() {
  //   return this.registrationForm.get('ProdId');
  // }
  // get BillDiscount() {
  //   return this.registerBill.get('BillDiscount');
  // }
  // get SupplierId() {
  //   return this.registerBill.get('SupplierId');
  // }
  // get StockId() {
  //   return this.registerBill.get('StockId');
  // }

  // get BillCode() {
  //   return this.registerBill.get('BillCode');
  // }
  // get PaymentMethodId() {
  //   return this.registerBill.get('PaymentMethodId');
  // }
  // get Remaining() {
  //   return this.registerBill.get('Remaining');
  // }
  // get PaidUp() {
  //   return this.registerBill.get('PaidUp');
  // }
  // get Date() {
  //   return this.registerBill.get('Date');
  // }
  // get BillType() {
  //   return this.registerBill.get('BillType');
  // }
  //  get BillTotal() {
  //    return this.registerBill.get('BillTotal');
  //  }
  // get CheckNumber() {
  //   return this.registerBill.get('CheckNumber');
  // }
  // registerBill = this.fb.group(
  //   {
  //     SupplierId: ['', [Validators.required]],
  //     StockId: ['', [Validators.required]],
  //     TaxId: ['', [Validators.required]],
  //     PaymentMethodId: ['', [Validators.required]],
  //     BillCode: ['', [Validators.required]],
  //     BillType: ['', [Validators.required]],
  //     Date: ['', [Validators.required]],
  //     BillDiscount: ['', [Validators.required]],
  //     PaidUp: ['', [Validators.required]],
  //     Remaining: ['', [Validators.required]],
  //     CheckNumber: ['', [Validators.required]],
  //     BillTotal: ['', [Validators.required]],
  //   }
  // );
  // registrationForm = this.fb.group(
  //   {
  //     Amount: [1, [Validators.required]],
  //     Discount: [1, [Validators.required]],
  //     Price: [1, [Validators.required]],
  //     ProdId: ['', [Validators.required]],
  //   });
  // showPurchaseProductForm() {
  //   this.tooglePurchaseProductForm = !this.tooglePurchaseProductForm;
  // }
  // purchaseProduct: PurchaseProduct = {} as PurchaseProduct;
  // totalPriceOfProduct: number = 0;
  // addProductToList() {
  //   this.totalPriceOfProduct = (parseInt(this.Price?.value) * parseInt(this.Amount?.value)) - ((parseInt(this.Discount?.value) * .01 * parseInt(this.Price?.value) * parseInt(this.Amount?.value)));
  //   this.purchaseProduct = new PurchaseProduct(this.Amount?.value, this.Discount?.value, this.totalPriceOfProduct, this.ProdId?.value);
  //   this.purchaseProList.push(this.purchaseProduct);
  //  this.blockFunction();
  //   this.productlengthEqualZero = false;
  //   this.dataSource = this.purchaseProList;
  //   this.tooglePurchaseProductForm = !this.tooglePurchaseProductForm;
  // }
  // deletePurchaseProduct(index: number) {
  //   if (index !== -1) {
  //     this.purchaseProList.splice(index, 1);
  //     if (this.purchaseProList.length == 0) {
  //       this.productlengthEqualZero = true;
  //       this.resertValuesAfterDeleteAllProduct();
  //     }
  //     this.dataSource = this.purchaseProList;
  //     this.tooglePurchaseProductForm = !this.tooglePurchaseProductForm;
  //   }
  // }
  // reset() {
  //   this.registrationForm.get('Amount')?.patchValue(1);
  //   this.registrationForm.get('Discount')?.patchValue(1);
  //   this.registrationForm.get('TotalPrice')?.patchValue(1);
  //   this.registrationForm.get('ProdId')?.patchValue('');
  // }

  // purchaseBill: PurchaseBill={} as PurchaseBill;
  // purchaseBillId:any;
  // addPurchaseBill() {
  //   this.registerBill.get('Date')?.patchValue(this.dateToDay);
  //   this.purchaseBill = new PurchaseBill(
  //     this.BillCode?.value+"",
  //     this.Date?.value,
  //     this.BillType?.value,
  //     this.BillDiscount?.value,
  //     this.PaidUp?.value,
  //     this.CheckNumber?.value+"",
  //     this.BillTotal?.value,
  //     this.remainingPart,
  //     this.StockId?.value,
  //     this.TaxId?.value,
  //     this.PaymentMethodId?.value,
  //     this.SupplierId?.value,


  //   );

  //   console.log(this.purchaseBill.purchaseproducts);
  //   this.purchaseBill.purchaseproducts=this.purchaseProList;
  //   this.purchaseBillService.insert(this.purchaseBill).subscribe(data=>{
  //     console.log(data);
  //     this.purchaseBillId=data.id;
  //     this.router.navigate(['/home/purchase/preview',{id:this.purchaseBillId}])

  //   },error=>console.log(error))
  //  // console.log(this.purchaseBill.purchaseproducts);
  //   //console.log(this.purchaseProList);

  // }
  // randomNumber:any;
  // /*Generate Random number To Bill Code */
  // getRandomInt() {
  //  let min = Math.ceil(1);
  //  let max = Math.floor(10000000);
  //   this.randomNumber= Math.floor(Math.random() * (max -min + 1)) +min; 
  //   this.registerBill.get('BillCode')?.patchValue(this.randomNumber);
  // }
  // taxValue:number=0;
  // taxObj:Tax={} as Tax;
  // taxChanged(){
  //   console.log();
  //   this.taxService.getByID(this.TaxId?.value).subscribe(data=>{
  //     this.taxObj=data;
  //     console.log(this.taxObj);
  //     this.calculateTotalForProducts();
  //     console.log(this.totalPriceOfPurchase);
  //     this.taxValue=(this.totalPriceOfPurchase*this.taxObj.percentage)*.01;
  //     this.CalculateTotalBill();
  //     console.log(this.taxValue);
  //   },error=>{
  //     console.log(error);
  //   })
  // }
  // totalPriceOfPurchase:number=0;
  // calculateTotalForProducts()
  // {
  //   this.totalPriceOfPurchase=0;
  //   for(let i=0;i<this.purchaseProList.length;i++)
  //   {

  //    this.totalPriceOfPurchase=this.totalPriceOfPurchase+ this.purchaseProList[i].totalPrice;

  //   }
  //   return this.totalPriceOfPurchase;
  // }
  // billTotalForAll:number=0;
  // blockTotalForAll:number=0;
  // blockFunction(){
  //   this.CalculateTotalBill();
  //   //this.blockTotalForAll=this.billTotalForAll;
  // }
  // CalculateTotalBill(){
  //   //this.billTotalForAll= this.calculateTotalForProducts()-(this.calculateTotalForProducts()*this.BillDiscount?.value*0.01)+this.taxValue;
  //   this.registerBill.get('BillTotal')?.patchValue(this.calculateTotalForProducts()-(this.calculateTotalForProducts()*this.BillDiscount?.value*0.01)+this.taxValue);
  // }
  // remainingPart:number=0;
  // isMaxTotalBill(){
  //   this.CalculateTotalBill();
  //   this.remainingPart=this.BillTotal?.value-this.PaidUp?.value;
  //   return this.PaidUp?.value>this.BillTotal?.value;
  // }
  // resertValuesAfterDeleteAllProduct(){
  //   this.registerBill.get('BillDiscount')?.patchValue(0);
  //   this.registerBill.get('TaxId')?.patchValue('0');
  //   this.registerBill.get('BillTotal')?.patchValue(0);

  //   //this.billTotalForAll=0;
  //   this.remainingPart=0;
  //   this.taxValue=0;
  //   this.registerBill.get('PaidUp')?.patchValue(0);

  // }


}
