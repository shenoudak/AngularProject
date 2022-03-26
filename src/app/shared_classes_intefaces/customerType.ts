export class CustomerType{
    id:number=0;
    typeName:string;
    description:string;
    constructor(typeName:string,description:string)
    {
        this.typeName=typeName;
        this.description=description;
    }
}