export class Tax{
    ID:number;
    Name:string;
    Percentage:number;
    Description:string;
    constructor(id:number,Name:string,description:string,percentage:number)
    {
        this.ID=id;
        this.Name=Name;
        this.Percentage=percentage;
        this.Description=description;
    }
}