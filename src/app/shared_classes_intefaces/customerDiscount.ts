export class CustomerDiscount
{
    id:number=0;
    discountValue:string;
    notes:string;
    startDate:string;
    endDate:string;

    constructor(discountValue:string,notes:string,startDate:string,endDate:string){
        
        this.discountValue=discountValue;
        this.notes=notes;
        this.startDate=startDate;
        this.endDate=endDate;
    }

}