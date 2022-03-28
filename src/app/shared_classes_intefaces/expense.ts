export class Expense{
    id:number=0;
    date:string;
    notes:string;
    value:number;
    checkNumber:string
    stockId:number;
    employeeId:number;
    typeId:number;
    payMethodId:number;
    constructor(date:string,notes:string,value:number,checkNumber:string,stockId:number,employeeId:number,typeId:number,payMethodId:number)
    {
        this.date=date;
        this.notes=notes;
        this.value=value;
        this.checkNumber=checkNumber;
        this.stockId=stockId;
        this.employeeId=employeeId;
        this.typeId=typeId;
        this.payMethodId=payMethodId;

    }
}