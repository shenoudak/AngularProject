export class TransferOperation{
    id:number=0;
    date:string;
    notes:string;
    employeeId:number;
    fromStockId:number;
    toStockId:number;
    constructor(date:string,notes:string,employeeId:number,fromStockId:number,toStockId:number){
        this.date=date;
        this.notes=notes;
        this.employeeId=employeeId;
        this.fromStockId=fromStockId;
        this.toStockId=toStockId;
        
    }
}