export class PurchaseProduct{
    id:number=0;
    amount:number;
    discount:number;
    totalPrice:number;
    productId:number;
    purchaseBillId:number=0;
    
    
    constructor(amount:number,discount:number,totalPrice:number,productId:number)
    {
        this.discount=discount;
        this.amount=amount;
        this.totalPrice=totalPrice;
        //this.purchaseBillId=purchaseBillId;
        this.productId=productId;
    }
}