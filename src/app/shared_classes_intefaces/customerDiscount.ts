export class CustomerDiscount
{
    ID:number;
    DiscountValue:string;
    Notes:string;
    StartDate:string;
    EndDate:string;

    constructor(ID:number,DiscountValue:string,Notes:string,StartDate:string,EndDate:string){
        this.ID=ID;
        this.DiscountValue=DiscountValue;
        this.Notes=Notes;
        this.StartDate=StartDate;
        this.EndDate=EndDate;
    }

}