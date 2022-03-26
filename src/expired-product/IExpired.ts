import { CategoryModule } from "../category/category.module";

export interface IExpired{
    ID:number;
    Amount:number;
    DateAdded:Date;
    Notes:string;
    ProductId:number;
}