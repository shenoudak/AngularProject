export class Customer{
    ID:number=1;
    Name:string;
    BalanceOutstand:string;
    Phone:number;
    Address:string;
    TradeName:string;
    constructor(name:string,balance:string,phone:number,address:string,tradeName:string){
        this.Name=name;
        this.BalanceOutstand=balance;
        this.Phone=phone;
        this.Address=address;
        this.TradeName=tradeName;
    }
}