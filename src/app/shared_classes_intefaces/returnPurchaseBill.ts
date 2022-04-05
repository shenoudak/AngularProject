import { ReturnPurchaeProduct } from "./returnPurchaseProduct";

export class ReturnPurchaseBill{
    id:number=0;
    code:string;
    date:string;
    netMoney:number;
    taxId:number;
    payMethodId:number;
    purchaseBillId:number;
    returnPurchaseProducts:ReturnPurchaeProduct[]=[];
    constructor(code:string,date:string,netMoney:number,taxId:number,payMethodId:number,purchaseBillId:number)
    {
        this.code=code;
        this.date=date;
        this.netMoney=netMoney;
        this.taxId=taxId;
        this.payMethodId=payMethodId;
        this.purchaseBillId=purchaseBillId;
    }
}