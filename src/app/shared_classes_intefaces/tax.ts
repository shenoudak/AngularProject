export class Tax{
    id:number=0;
    name:string;
    percentage:number;
    description:string;
    constructor(name:string,description:string,percentage:number)
    {
        this.name=name;
        this.percentage=percentage;
        this.description=description;
    }
}