import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseProduct } from 'src/app/shared_classes_intefaces/purchaseProduct';
import { SaleBill } from 'src/app/shared_classes_intefaces/saleBill';
import { SaleBillProduct } from 'src/app/shared_classes_intefaces/saleBillProduct';
import { Tax } from 'src/app/shared_classes_intefaces/tax';
import { CustomerService } from 'src/Customer/customer/customerService/customer.service';
import { PaymentMService } from 'src/payment/services/payment-m.service';
import { ProductService } from 'src/product/productService/product.service';
import { StockService } from 'src/stock/stock/stock.service';
import { TaxService } from 'src/taxes/taxService/tax.service';
import { SaleBillService } from '../services/sale-bill.service';
@Component({
  selector: 'app-add-sale-bill',
  templateUrl: './add-sale-bill.component.html',
  styleUrls: ['./add-sale-bill.component.scss']
})
export class AddSaleBillComponent implements OnInit {
  header:string="Sales Bill";
    dataSource: PurchaseProduct[] = [];
    productlengthEqualZero: boolean = true;
    displayedColumns: string[] = ['amount', 'discount', 'totalPrice', 'productName', 'actions']
    tooglePurchaseProductForm: boolean = true;
    stockList: any = [];
    customerList: any = [];
    productList: any = [];
    paymentMList: any = [];
    taxList: any = [];
    listTest:any[]=[];
    //minDate: Date;
    maxDate: Date;
    dateToDay:any;
    //purchaseproducts:PurchaseProduct[];
    purchaseProList: any[] = [];
    constructor(private fb: FormBuilder, private paymentMethodService: PaymentMService, private taxService: TaxService, private customerService: CustomerService, private stockService: StockService, private router: Router, private productService: ProductService, private saleBillService: SaleBillService) {
      const currentYear = new Date().getFullYear();
      const today = new Date();
      this.dateToDay=today;
     // this.registerBill.get("Date")?.patchValue(this.dateToDay);
      const month = today.getMonth();
      const year = today.getFullYear();
      const day = today.getDay();
      //this.minDate = new Date(currentYear - 20, 0, 1);
      this.maxDate = new Date(year, month, day + 1);
    }
  
    ngOnInit(): void {
      this.getRandomInt();
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
      this.customerService.getAll().subscribe(data => {
        this.customerList = data;
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
    get ClientId() {
      return this.registerBill.get('ClientId');
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
     get TaxPrice() {
      return this.registerBill.get('TaxPrice');
    }
    get CheckNumber() {
      return this.registerBill.get('CheckNumber');
    }
    registerBill = this.fb.group(
      {
        ClientId: ['', [Validators.required]],
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
        TaxPrice: ['', [Validators.required]]
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
    saleBillProduct: SaleBillProduct = {} as SaleBillProduct;
    totalPriceOfProduct: number = 0;
    addProductToList() {
      this.totalPriceOfProduct = (parseInt(this.Price?.value) * parseInt(this.Amount?.value)) - ((parseInt(this.Discount?.value) * .01 * parseInt(this.Price?.value) * parseInt(this.Amount?.value)));
      this.saleBillProduct = new SaleBillProduct(this.Amount?.value, this.Discount?.value, this.totalPriceOfProduct, this.ProdId?.value);
      this.purchaseProList.push(this.saleBillProduct);
      
     this.CalculateTotalBill();
     this.registerBill.get("BillTotal")?.patchValue(this.billTotalForAll);
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
    
    saleBill: SaleBill={} as SaleBill;
    saleBillId:any;
    addSaleBill() {
      this.registerBill.get('Date')?.patchValue(this.dateToDay);
      this.saleBill = new SaleBill(
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
        this.ClientId?.value,
      
  
      );
      console.log(this.saleBill.saleBillProducts);
      this.saleBill.saleBillProducts=this.purchaseProList;
      this.saleBillService.insert(this.saleBill).subscribe(data=>{
        this.saleBillId=data.id;
        console.log(data);
        this.router.navigate(['/home/sales/preview',{id:this.saleBillId}])
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
    taxIsChanged:boolean=false;
    taxObj:Tax={} as Tax;
    taxChanged(){
      console.log();
      this.taxService.getByID(this.TaxId?.value).subscribe(data=>{
        this.taxObj=data;
        console.log(this.taxObj);
        this.totalPriceOfPurchase=this.calculateTotalForProducts();
        console.log(this.totalPriceOfPurchase);
        this.taxValue=(this.totalPriceOfPurchase*this.taxObj.percentage)*.01;
        this.registerBill.get("TaxPrice")?.patchValue(this.taxValue);
        this.registerBill.get("BillTotal")?.patchValue(this.billTotalForAll);
        
        this.billTotalForAll;
        console.log(this.taxValue);
      },error=>{
        console.log(error);
      })
    }
    totalPriceOfPurchase:any;
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
