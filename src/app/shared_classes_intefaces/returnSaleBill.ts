import { ReturnSaleProduct } from "./returnSaleProduct";

export class ReturnSaleBill{
    id:number=0;
    code:string;
    date:string;
    netMoney:number;
    taxId:number;
    payMethodId:number;
    saleBillId:number;
    returnSaleProducts:ReturnSaleProduct[]=[];
    constructor(code:string,date:string,netMoney:number,taxId:number,payMethodId:number,saleBillId:number)
    {
        this.code=code;
        this.date=date;
        this.netMoney=netMoney;
        this.taxId=taxId;
        this.payMethodId=payMethodId;
        this.saleBillId=saleBillId;
    }
}