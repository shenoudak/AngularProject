export class Product{
    id:number=0;
    name:string;
    description:string;
    barcode:string;
    miniAmount:number;
    sellingPrice:number;
    purchasingPrice:number;
    expiryPeriod:number;
    categoryId:number;
    constructor(name:string,description:string,barcode:string, miniAmount:number,sellingPrice:number, purchasingPrice:number,expiryPeriod:number,categoryId:number)
    {
        this.name=name;
        this.description=description;
        this.barcode=barcode;
        this.miniAmount=miniAmount;
        this.sellingPrice=sellingPrice;
        this.purchasingPrice=purchasingPrice;
        this.expiryPeriod=expiryPeriod;
        this.categoryId=categoryId;
    }
}