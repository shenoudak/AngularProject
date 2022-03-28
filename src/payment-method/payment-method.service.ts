import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { IPayment } from './IPayment';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  constructor(private http:HttpClient) { }
  private _url="https://localhost:44338/api/paymentMethods";
  //#region Add Payment Method
  addPaymentMethod(data: any): Observable<any> {
    return this.http.post(this._url, data)
  }
  //#endregion
  //#region Edit Payment Method
  editPaymentMethod(id:number,params:any){
    return this.http.put(this._url+"/"+id,params)
  }
  //#endregion
  //#region 
  showPaymentMethod():Observable<IPayment[]>{
    return this.http.get<IPayment[]>(this._url)
  }
  //#region 
  //#region 
  showPaymentById(id:any){
    return this.http.get(this._url+"/"+id);
  }
  //#endregion
  //#region delete Payment Method
  deletePaymentMethod(id: any) {
    return this.http.delete(this._url+"/"+id);
  } 
  //#endregion
}
