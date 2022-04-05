export class PaymentM
{
    id:number=0;
    name:string;
    type:string;
    balance:number;
    constructor(name:string,type:string, balance:number){
        this.name=name;
        this.type=type;
        this.balance=balance;
    }

}