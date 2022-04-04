export class CustomerDiscount
{
    id:number=0;
    title:string;
    unitCount:number;
    discountValue:string;
    notes:string;
    startDate:string;
    endDate:string;

    constructor(discountValue:string,notes:string,startDate:string,endDate:string,title:string,unitCount:number){
        
        this.discountValue=discountValue;
        this.notes=notes;
        this.startDate=startDate;
        this.endDate=endDate;
        this.title=title;
        this.unitCount=unitCount;
    }

}