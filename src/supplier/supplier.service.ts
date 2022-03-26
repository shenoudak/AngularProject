import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISupplier } from './ISupplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
private _url="";
  constructor(private http:HttpClient) { }
  //show All Supplier
  GetAllSupplier():Observable<ISupplier[]>{
    return this.http.get<ISupplier[]>(this._url);
  }
  //Add New Supplier
  AddSupplier(params:any){
    return this.http.post(this._url,params);
  }
  //Edit Supplier
  EditSupplier(id:any,params:any){
    return this.http.put(this._url+"/"+id,params);
  }
  //Get Supplier By Id
  GetSupplierById(id:any){
    return this.http.get(this._url+"/"+id);
  }
  //Delet Supplier
  DeleteSupplier(id:any){
    return this.http.delete(this._url+"/"+id);
  }
}
