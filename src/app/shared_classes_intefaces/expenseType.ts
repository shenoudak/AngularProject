export class ExpenseType{
    id:number=0;
    name:string;
    details:string;
    constructor(name:string,details:string)
    {
        this.name=name;
        this.details=details;
    }
}