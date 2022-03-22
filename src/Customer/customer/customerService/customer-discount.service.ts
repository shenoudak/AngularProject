import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CustomerDiscount } from 'src/app/shared_classes_intefaces/customerDiscount';

@Injectable({
  providedIn: 'root'
})
export class CustomerDiscountService {
  _url:string="";
  constructor(private http:HttpClient) { }
  getAll():Observable<CustomerDiscount[]>{
    return this.http.get<CustomerDiscount[]>(this._url).pipe(catchError(error=>{
       return throwError(()=>error.message||"Server Problem");
     }));
   }
   getByID(discountId:number):Observable<CustomerDiscount>{
     return this.http.get<CustomerDiscount>(this._url+discountId).pipe(catchError(error=>{
       return throwError(()=>error.message||"Server Problem");
     }));
   }
   insert(customerDiscount:CustomerDiscount):Observable<CustomerDiscount>{
     return this.http.post<CustomerDiscount>(this._url,customerDiscount).pipe(catchError(error=>{
       return throwError(()=>error.message||"Server Problem");
     }));
   }
   update(discountId:number,customerDiscount:CustomerDiscount):Observable<CustomerDiscount>{
    return this.http.patch<CustomerDiscount>(this._url+discountId,customerDiscount).pipe(catchError(error=>{
      return throwError(()=>error.message||"Server Problem");
    }));
  }
   
   removeD(discountId:number):Observable<CustomerDiscount>{
     return this.http.delete<CustomerDiscount>(this._url+discountId).pipe(catchError(error=>{
       return throwError(()=>error.message||"Server Problem");
     }));
   }
}

