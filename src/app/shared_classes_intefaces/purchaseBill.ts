import { PurchaseProduct } from "./purchaseProduct";

export class PurchaseBill{
    id:number=0;
    billCode:string;
    date:string;
    billType:string;
    discount:number;
    paidup:number;
    checkNumber:string;
    billTotal:number;
    remaining:number;
    stockId:number;
    taxId:number;
    payMethodId:number;
    supplierId:number;
    purchaseproducts:PurchaseProduct[]=[];
     /*
     {
    "billCode": "80000",
    "date": "2020-10-20T00:00:00",
    "billType": "cash",
    "discount": 10,
    "paidup": 20,
    "checkNumber": "2030",
    "billTotal": 2500,
    "remaining": 200,
    "stockId": 3,
    "taxId": 1,
    "payMethodId": 2,
    "supplierId": 1,
    "purchaseProducts": [
        {
            "id":0,
            "amount":20,
            "discount":10,
            "totalPrice":1000,
            "productId":1


        }
    ]
      */
    constructor(billCode:string,date:string,billType:string, discount:number,paidup:number,checkNumber:string, billTotal:number,remaining:number,stockId:number,taxId:number,payMethodId:number,supplierId:number)
    {
        this.billCode=billCode;
        this.date=date;
        this.billType=billType;
        this.discount=discount;
        this.paidup=paidup;
        this.checkNumber=checkNumber;
        this.billTotal=billTotal;
        this.remaining=remaining;
        this.stockId=stockId;
        this.taxId=taxId;
        this.payMethodId=payMethodId;
        this.supplierId=supplierId;
       // this.purchaseproducts=purchaseproducts;
    }
}