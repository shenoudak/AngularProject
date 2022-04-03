import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CustomerDiscount } from 'src/app/shared_classes_intefaces/customerDiscount';

@Injectable({
  providedIn: 'root'
})
export class CustomerDiscountService {
  _url:string="https://localhost:44338/api/Discounts";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  getAll():Observable<CustomerDiscount[]>{
    return this.http.get<CustomerDiscount[]>(this._url)
    .pipe(catchError(this.errorHandler));
   }
   getByID(discountId:number):Observable<CustomerDiscount>{
     return this.http.get<CustomerDiscount>(this._url+'/'+discountId)
     .pipe(catchError(this.errorHandler));
   }
   insert(customerDiscount:CustomerDiscount):Observable<any>{
     return this.http.post<CustomerDiscount>(this._url,JSON.stringify(customerDiscount),this.httpOptions)
     .pipe(catchError(this.errorHandler));
   }
   update(discountId:number,customerDiscount:CustomerDiscount):Observable<any>{
     console.log(JSON.stringify(customerDiscount));
    return this.http.put<CustomerDiscount>(this._url+'/'+discountId,JSON.stringify(customerDiscount),this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
   
   removeD(discountId:number):Observable<any>{
     return this.http.delete<CustomerDiscount>(this._url+'/'+discountId)
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

