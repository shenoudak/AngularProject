export class Employee{
    id:number=0;
    name:string;
    address:string;
    nationalId:number;
    phone:number;
    salary:number;
    photo:string;
    haveAccess:number;
    stockId:number=0;
    jobId:number=0;
    constructor(name:string,address:string,nationalId:number,phone:number,salary:number,photo:string,haveAccess:number,stockId:number,jobId:number)
    {
        this.name=name;
        this.address=address;
        this.nationalId=nationalId;
        this.phone=phone;
        this.salary=salary;
        this.photo=photo;
        this.haveAccess=haveAccess;
        this.stockId=stockId;
        this.jobId=jobId;
        
    }
}