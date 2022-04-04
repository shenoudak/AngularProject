export class Customer{
    id:number=0;
    name:string;
    balanceOutstand:number;
    phone:number;
    address:string;
    tradeName:string;
    typeId:number;
    discountId:number;
    constructor(name:string,balance:number,phone:number,address:string,tradeName:string,typeId:number,discountId:number){
        this.name=name;
        this.balanceOutstand=balance;
        this.phone=phone;
        this.address=address;
        this.tradeName=tradeName;
        this.typeId=typeId;
        this.discountId=discountId;
        
    }
}