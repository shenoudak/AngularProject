export class CustomerDiscount
{
    ID:number=1;
    DiscountValue:string;
    Notes:string;
    StartDate:string;
    EndDate:string;

    constructor(DiscountValue:string,Notes:string,StartDate:string,EndDate:string){
        
        this.DiscountValue=DiscountValue;
        this.Notes=Notes;
        this.StartDate=StartDate;
        this.EndDate=EndDate;
    }

}