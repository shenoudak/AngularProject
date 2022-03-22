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
   getByID(stockId:number):Observable<CustomerDiscount>{
     return this.http.get<CustomerDiscount>(this._url+stockId).pipe(catchError(error=>{
       return throwError(()=>error.message||"Server Problem");
     }));
   }
   insert(stock:CustomerDiscount):Observable<CustomerDiscount>{
     return this.http.post<CustomerDiscount>(this._url,stock).pipe(catchError(error=>{
       return throwError(()=>error.message||"Server Problem");
     }));
   }
   removeD(stockId:number):Observable<CustomerDiscount>{
     return this.http.delete<CustomerDiscount>(this._url+stockId).pipe(catchError(error=>{
       return throwError(()=>error.message||"Server Problem");
     }));
   }
}

