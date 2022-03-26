import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { IExpired } from './IExpired';

@Injectable({
  providedIn: 'root'
})
export class ExpiredProductService {
  [x: string]: any;
private _url="";
  constructor(private  http:HttpClient) { }
  //Add Expired Product
  AddExpiredProduct(data:any){
   return this.http.post(this._url,data);
  }
  //Get All Expired Product
  GetAllExpiredProduct():Observable<IExpired[]>{
    return this.http.get<IExpired[]>(this._url) ;
  }
  //Get Expired Product By Id
  GetExpiredProductById(id:any){
    return this.http.get(this._url+"/"+id);
  }
  //Edit Expired Product
  EditExpiredProduct(data:any,id:any){
    return this.http.put(this._url+"/"+id,data);
  }
  //Delete Expired Product
  DeleteExiredProduct(id:any){
    return this.http.delete(this._url+"/"+id);
  }
}
