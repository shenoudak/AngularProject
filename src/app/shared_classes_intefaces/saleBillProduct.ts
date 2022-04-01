export class SaleBillProduct{
    id:number=0;
    amountToSell:number;
    discount:number;
    totalPrice:number;
    productId:number;
    saleBillId:number=0;
    
    
    constructor(amountToSell:number,discount:number,totalPrice:number,productId:number)
    {
        this.discount=discount;
        this.amountToSell=amountToSell;
        this.totalPrice=totalPrice;
        this.productId=productId;
    }
}