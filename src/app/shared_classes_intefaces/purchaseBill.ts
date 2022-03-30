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
    suplierId:number;
    purchaseproducts:PurchaseProduct[];
    constructor(billCode:string,date:string,billType:string, discount:number,paidup:number,checkNumber:string, billTotal:number,remaining:number,stockId:number,taxId:number,payMethodId:number,suplierId:number,purchaseproducts:PurchaseProduct)
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
        this.suplierId=suplierId;
        this.purchaseproducts=[];
    }
}