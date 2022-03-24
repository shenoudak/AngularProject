export class CustomerType{
    ID:number;
    TypeName:string;
    Description:string;
    constructor(id:number,typeName:string,description:string)
    {
        this.ID=id;
        this.TypeName=typeName;
        this.Description=description;
    }
}