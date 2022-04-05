import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { PurchaseProduct } from 'src/app/shared_classes_intefaces/purchaseProduct';

@Injectable({
  providedIn: 'root'
})
export class PurchaseProductService {

  constructor(private http:HttpClient) { }
  _url:string="https://localhost:44338/api/PurchaseProducts";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })}
  getAll():Observable<PurchaseProduct[]>{
    return this.http.get<PurchaseProduct[]>(this._url)
    .pipe(catchError(this.errorHandler));
   }
   getByID(purchaseProductId:number):Observable<PurchaseProduct>{
     return this.http.get<PurchaseProduct>(this._url+'/'+purchaseProductId)
     .pipe(catchError(this.errorHandler));
   }
   insert(purchaseProduct:PurchaseProduct):Observable<any>{
     console.log(JSON.stringify(purchaseProduct));
     return this.http.post<PurchaseProduct>(this._url,JSON.stringify(purchaseProduct),this.httpOptions)
     .pipe(catchError(this.errorHandler));
   }
   update(purchaseProductId:number,purchaseProduct:PurchaseProduct):Observable<any>{
     console.log(JSON.stringify(purchaseProduct));
    return this.http.put<PurchaseProduct>(this._url+'/'+purchaseProductId,JSON.stringify(purchaseProduct),this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
   
   removeD(purchaseProductId:number):Observable<any>{
     return this.http.delete<PurchaseProduct>(this._url+'/'+purchaseProductId)
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
