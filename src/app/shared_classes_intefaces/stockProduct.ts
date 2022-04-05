export class StockProduct{
    id:number=0;
    amount:number;
    productionDate:string;
    StockId:number;
    ProductId:number;
    constructor( amount:number,productionDate:string,StockId:number,ProductId:number)
    {
        this.amount=amount;
        this.productionDate=productionDate;
        this.StockId=StockId;
        this.ProductId=ProductId;
    }
}