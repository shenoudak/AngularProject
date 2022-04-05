import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ReturnPurchaseBill } from 'src/app/shared_classes_intefaces/returnPurchaseBill';

@Injectable({
  providedIn: 'root'
})
export class ReturnPurchaseBillService {
  constructor(private http:HttpClient) { }
  _url:string="https://localhost:44338/api/PurchaseReturnsBills";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })}
  getAll():Observable<ReturnPurchaseBill[]>{
    return this.http.get<ReturnPurchaseBill[]>(this._url)
    .pipe(catchError(this.errorHandler));
   }
   getByID(returnPBId:number):Observable<ReturnPurchaseBill>{
     return this.http.get<ReturnPurchaseBill>(this._url+'/'+returnPBId)
     .pipe(catchError(this.errorHandler));
   }
   insert(returnPBill:ReturnPurchaseBill):Observable<any>{
     console.log(JSON.stringify(returnPBill));
     return this.http.post<ReturnPurchaseBill>(this._url,JSON.stringify(returnPBill),this.httpOptions)
     .pipe(catchError(this.errorHandler));
   }
   update(returnPBId:number,returnPBill:ReturnPurchaseBill):Observable<any>{
     console.log(JSON.stringify(returnPBill));
    return this.http.put<ReturnPurchaseBill>(this._url+'/'+returnPBId,JSON.stringify(returnPBill),this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
   
   removeD(returnPBId:number):Observable<any>{
     return this.http.delete<ReturnPurchaseBill>(this._url+'/'+returnPBId)
     .pipe(catchError(this.errorHandler));
   }
   
   errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`;
    }
    return throwError(()=>errorMessage);
 }

}
