import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { PurchaseBill } from 'src/app/shared_classes_intefaces/purchaseBill';

@Injectable({
  providedIn: 'root'
})
export class PurchaseBillService {

  _url:string="https://localhost:44338/api/purchaseBills";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  getAll():Observable<PurchaseBill[]>{
    return this.http.get<PurchaseBill[]>(this._url)
    .pipe(catchError(this.errorHandler));
   }
   getByID(purchaseBillId:number):Observable<PurchaseBill>{
     return this.http.get<PurchaseBill>(this._url+'/'+purchaseBillId)
     .pipe(catchError(this.errorHandler));
   }
   getPurchaseProducts(purchaseBillId:number):Observable<any>{
    return this.http.get<any>(this._url+'/id/'+purchaseBillId+'/Products')
    .pipe(catchError(this.errorHandler));
  }
  

  getPurchaseProductsByBillCod(purchaseBillCode:number):Observable<any>{
    return this.http.get<any>(this._url+'/code/'+purchaseBillCode+'/Products')
    .pipe(catchError(this.errorHandler));
  }
   insert(purchaseBill:PurchaseBill):Observable<any>{
     console.log(JSON.stringify(purchaseBill));
     return this.http.post<PurchaseBill>(this._url,JSON.stringify(purchaseBill),this.httpOptions)
     .pipe(catchError(this.errorHandler));
   }
   update(purchaseBillId:number,purchaseBill:PurchaseBill):Observable<any>{
     console.log(JSON.stringify(purchaseBill));
    return this.http.put<PurchaseBill>(this._url+'/'+purchaseBillId,JSON.stringify(purchaseBill),this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
   
   removeD(purchaseBillId:number):Observable<any>{
     return this.http.delete<PurchaseBill>(this._url+'/'+purchaseBillId)
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
