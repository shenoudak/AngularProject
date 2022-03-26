import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStockProduct } from './IStockProduct';

@Injectable({
  providedIn: 'root'
})
export class StockProductService {

  constructor(private http:HttpClient) { }
  private _url="";
  //GetStockProduct
  GetStockProduct():Observable<IStockProduct[]>{
  return this.http.get<IStockProduct[]>(this._url);
  }
  //GetStockProductById
  GetStockProductById(id:any){
    return this.http.get(this._url+"/"+id);
  }
  //Add StockProduct
  AddStcokProduct(data:any){
    return this.http.post(this._url,data);
  }
  //EditStockProduct
  EditStockProduct(data:any,id:any){
    return this.http.put(this._url+"/"+id,data);
  }
  //DeleteStockProduct
  DeleteStockProduct(id:any){
    return this.http.delete(this._url+"/"+id);
  }

}
