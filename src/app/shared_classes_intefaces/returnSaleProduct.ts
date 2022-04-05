export class ReturnSaleProduct
{
    id:number=0;
    amountReturned:number;
    saleProductId:number;
    returnSaleBillId:number=0;
    
    
    
    constructor(amountReturned:number,saleProductId:number)
    {
        this.amountReturned=amountReturned;
        this.saleProductId=saleProductId;
    }
}