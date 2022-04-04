export class Supplier{
    id:number=0;
    name:string;
    phone:number;
    address:string;
    balanceDebit:number;
    typeId:number;
    constructor(name:string,balanceDebit:number,phone:number,address:string,typeId:number){
        this.name=name;
        this.balanceDebit=balanceDebit;
        this.phone=phone;
        this.address=address;
        this.typeId=typeId;
    }
}