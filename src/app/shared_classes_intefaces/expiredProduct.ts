export class ExpiredProduct{
    id:number=0;
    amount:number;
    dateAdded:string;
    notes:string;
    productId:number;
    productionDate:string;

    constructor(amount:number,dateAdded:string,notes:string,productId:number,productionDate:string)
    {
        this.amount=amount;
        this.dateAdded=dateAdded;
        this.notes=notes;
        this.productId=productId;
        this.productionDate=productionDate;

    }
}