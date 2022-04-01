import { PurchaseProduct } from "./purchaseProduct";
import { SaleBillProduct } from "./saleBillProduct";

export class SaleBill{
    id:number=0;
    billCode:string;
    date:string;
    billType:string;
    discount:number;
    paidup:number;
    checkNumber:string;
    billTotalPrice:number;
    remaining:number;
    stockId:number;
    taxId:number;
    payMethodId:number;
    clientId:number;
    saleBillProducts:SaleBillProduct[]=[];
    constructor(billCode:string,date:string,billType:string, discount:number,paidup:number,checkNumber:string, billTotalPrice:number,remaining:number,stockId:number,taxId:number,payMethodId:number,clientId:number)
    {
        this.billCode=billCode;
        this.date=date;
        this.billType=billType;
        this.discount=discount;
        this.paidup=paidup;
        this.checkNumber=checkNumber;
        this.billTotalPrice=billTotalPrice;
        this.remaining=remaining;
        this.stockId=stockId;
        this.taxId=taxId;
        this.payMethodId=payMethodId;
        this.clientId=clientId;
    }
}