export class ReturnPurchaeProduct
{
    id:number=0;
    amountReturned:number;
    purchaseProductId:number;
    returnPurchaseBillId:number=0;
    
    
    
    constructor(amountReturned:number,purchaseProductId:number)
    {
        this.amountReturned=amountReturned;
        this.purchaseProductId=purchaseProductId;
    }
}