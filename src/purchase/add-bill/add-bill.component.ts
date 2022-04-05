import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseBill } from 'src/app/shared_classes_intefaces/purchaseBill';
import { PurchaseProduct } from 'src/app/shared_classes_intefaces/purchaseProduct';
import { Tax } from 'src/app/shared_classes_intefaces/tax';
import { PaymentMService } from 'src/payment/services/payment-m.service';
import { ProductService } from 'src/product/productService/product.service';
import { SupplierService } from 'src/stock/stock/services/supplier.service';
import { StockService } from 'src/stock/stock/stock.service';
import { TaxService } from 'src/taxes/taxService/tax.service';
import { PurchaseBillService } from '../services/purchase-bill.service';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss']
})
export class AddBillComponent implements OnInit {
  header:string="Purchase Bill";
  dataSource: PurchaseProduct[] = [];
  productlengthEqualZero: boolean = true;
  displayedColumns: string[] = ['amount', 'discount', 'totalPrice', 'productName', 'actions']
  tooglePurchaseProductForm: boolean = true;
  stockList: any = [];
  supplierList: any = [];
  productList: any = [];
  paymentMList: any = [];
  taxList: any = [];
  listTest:any[]=[];
  //minDate: Date;
  maxDate: Date;
  dateToDay:any;
  //purchaseproducts:PurchaseProduct[];
  purchaseProList: any[] = [];
  constructor(private fb: FormBuilder, private paymentMethodService: PaymentMService, private taxService: TaxService, private supplierService: SupplierService, private stockService: StockService, private router: Router, private productService: ProductService, private purchaseBillService: PurchaseBillService) {
    const currentYear = new Date().getFullYear();
    const today = new Date();
    this.dateToDay=today;
    const month = today.getMonth();
    const year = today.getFullYear();
    const day = today.getDay();
    //this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(year, month, day + 1);
  }

  ngOnInit(): void {
    this.getRandomInt();
    this.purchaseBillService.getAll().subscribe(data=>{
      this.listTest=data;
    })
    this.dataSource = this.purchaseProList;
    this.productService.getAll().subscribe(data => {
      this.productList = data;
    }, error => {
      console.log(error);
    })
    this.stockService.getAll().subscribe(data => {
      this.stockList = data;
      console.log(this.stockList);
    }, error => {
      console.log(error);
    });
    this.supplierService.getAll().subscribe(data => {
      this.supplierList = data;
    }, error => {
      console.log(error);
    })
    this.taxService.getAll().subscribe(data => {
      this.taxList = data;
    }, error => {
      console.log(error);
    })
    this.paymentMethodService.getAll().subscribe(data => {
      this.paymentMList = data;
    }, error => {
      console.log(error);
    })
  }
  get Amount() {
    return this.registrationForm.get('Amount');
  }

  get Discount() {
    return this.registrationForm.get('Discount');
  }
  get Price() {
    return this.registrationForm.get('Price');
  }
  get ProdId() {
    return this.registrationForm.get('ProdId');
  }
  get BillDiscount() {
    return this.registerBill.get('BillDiscount');
  }
  get SupplierId() {
    return this.registerBill.get('SupplierId');
  }
  get StockId() {
    return this.registerBill.get('StockId');
  }
  get TaxId() {
    return this.registerBill.get('TaxId');
  }
  get BillCode() {
    return this.registerBill.get('BillCode');
  }
  get PaymentMethodId() {
    return this.registerBill.get('PaymentMethodId');
  }
  get Remaining() {
    return this.registerBill.get('Remaining');
  }
  get PaidUp() {
    return this.registerBill.get('PaidUp');
  }
  get Date() {
    return this.registerBill.get('Date');
  }
  get BillType() {
    return this.registerBill.get('BillType');
  }
   get BillTotal() {
     return this.registerBill.get('BillTotal');
   }
  get CheckNumber() {
    return this.registerBill.get('CheckNumber');
  }
  registerBill = this.fb.group(
    {
      SupplierId: ['', [Validators.required]],
      StockId: ['', [Validators.required]],
      TaxId: ['', [Validators.required]],
      PaymentMethodId: ['', [Validators.required]],
      BillCode: ['', [Validators.required]],
      BillType: ['', [Validators.required]],
      Date: ['', [Validators.required]],
      BillDiscount: ['', [Validators.required]],
      PaidUp: ['', [Validators.required]],
      Remaining: ['', [Validators.required]],
      CheckNumber: ['', [Validators.required]],
      BillTotal: ['', [Validators.required]],
    }
  );
  registrationForm = this.fb.group(
    {
      Amount: [1, [Validators.required]],
      Discount: [1, [Validators.required]],
      Price: [1, [Validators.required]],
      ProdId: ['', [Validators.required]],
    });
  showPurchaseProductForm() {
    this.tooglePurchaseProductForm = !this.tooglePurchaseProductForm;
  }
  purchaseProduct: PurchaseProduct = {} as PurchaseProduct;
  totalPriceOfProduct: number = 0;
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
  reset() {
    this.registrationForm.get('Amount')?.patchValue(1);
    this.registrationForm.get('Discount')?.patchValue(1);
    this.registrationForm.get('TotalPrice')?.patchValue(1);
    this.registrationForm.get('ProdId')?.patchValue('');
  }
  
  purchaseBill: PurchaseBill={} as PurchaseBill;
  purchaseBillId:any;
  addPurchaseBill() {
    this.registerBill.get('Date')?.patchValue(this.dateToDay);
    this.purchaseBill = new PurchaseBill(
      this.BillCode?.value+"",
      this.Date?.value,
      this.BillType?.value,
      this.BillDiscount?.value,
      this.PaidUp?.value,
      this.CheckNumber?.value+"",
      this.BillTotal?.value,
      this.remainingPart,
      this.StockId?.value,
      this.TaxId?.value,
      this.PaymentMethodId?.value,
      this.SupplierId?.value,
    

    );
    
    console.log(this.purchaseBill.purchaseproducts);
    this.purchaseBill.purchaseproducts=this.purchaseProList;
    this.purchaseBillService.insert(this.purchaseBill).subscribe(data=>{
      console.log(data);
      this.purchaseBillId=data.id;
      this.router.navigate(['/home/purchase/preview',{id:this.purchaseBillId}])
      
    },error=>console.log(error))
   // console.log(this.purchaseBill.purchaseproducts);
    //console.log(this.purchaseProList);

  }
  randomNumber:any;
  /*Generate Random number To Bill Code */
  getRandomInt() {
   let min = Math.ceil(1);
   let max = Math.floor(10000000);
    this.randomNumber= Math.floor(Math.random() * (max -min + 1)) +min; 
    this.registerBill.get('BillCode')?.patchValue(this.randomNumber);
  }
  taxValue:number=0;
  taxObj:Tax={} as Tax;
  taxChanged(){
    console.log();
    this.taxService.getByID(this.TaxId?.value).subscribe(data=>{
      this.taxObj=data;
      console.log(this.taxObj);
      this.calculateTotalForProducts();
      console.log(this.totalPriceOfPurchase);
      this.taxValue=(this.totalPriceOfPurchase*this.taxObj.percentage)*.01;
      this.CalculateTotalBill();
      console.log(this.taxValue);
    },error=>{
      console.log(error);
    })
  }
  totalPriceOfPurchase:number=0;
  calculateTotalForProducts()
  {
    this.totalPriceOfPurchase=0;
    for(let i=0;i<this.purchaseProList.length;i++)
    {
      
     this.totalPriceOfPurchase=this.totalPriceOfPurchase+ this.purchaseProList[i].totalPrice;
    
    }
    return this.totalPriceOfPurchase;
  }
  billTotalForAll:number=0;
  blockTotalForAll:number=0;
  blockFunction(){
    this.CalculateTotalBill();
    //this.blockTotalForAll=this.billTotalForAll;
  }
  CalculateTotalBill(){
    //this.billTotalForAll= this.calculateTotalForProducts()-(this.calculateTotalForProducts()*this.BillDiscount?.value*0.01)+this.taxValue;
    this.registerBill.get('BillTotal')?.patchValue(this.calculateTotalForProducts()-(this.calculateTotalForProducts()*this.BillDiscount?.value*0.01)+this.taxValue);
  }
  remainingPart:number=0;
  isMaxTotalBill(){
    this.CalculateTotalBill();
    this.remainingPart=this.BillTotal?.value-this.PaidUp?.value;
    return this.PaidUp?.value>this.BillTotal?.value;
  }
  resertValuesAfterDeleteAllProduct(){
    this.registerBill.get('BillDiscount')?.patchValue(0);
    this.registerBill.get('TaxId')?.patchValue('0');
    this.registerBill.get('BillTotal')?.patchValue(0);

    //this.billTotalForAll=0;
    this.remainingPart=0;
    this.taxValue=0;
    this.registerBill.get('PaidUp')?.patchValue(0);

  }
  
}