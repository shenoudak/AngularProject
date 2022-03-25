export class Product{
    ID:number;
    Name:string;
    Description:string;
    Barcode:string;
    MiniAmount:number;
    SellingPrice:number;
    PurchasingPrice:number;
    ExpiryPeriod:number;
    CategoryId:number;
    constructor(id:number,Name:string,description:string,Barcode:string, MiniAmount:number,sellingPrice:number, PurchasingPrice:number,ExpiryPeriod:number,CategoryId:number)
    {
        this.ID=id;
        this.Name=Name;
        this.Description=description;
        this.Barcode=Barcode;
        this.MiniAmount=MiniAmount;
        this.SellingPrice=sellingPrice;
        this.PurchasingPrice=PurchasingPrice;
        this.ExpiryPeriod=ExpiryPeriod;
        this.CategoryId=CategoryId;
    }
}