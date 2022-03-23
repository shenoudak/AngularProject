import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Customer } from 'src/app/shared_classes_intefaces/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  _url:string="";
  constructor(private http:HttpClient) { }
  getAll():Observable<Customer[]>{
    return this.http.get<Customer[]>(this._url).pipe(catchError(error=>{
       return throwError(()=>error.message||"Server Problem");
     }));
   }
   getByID(customerId:number):Observable<Customer>{
     return this.http.get<Customer>(this._url+customerId).pipe(catchError(error=>{
       return throwError(()=>error.message||"Server Problem");
     }));
   }
   insert(customerDiscount:Customer):Observable<Customer>{
     return this.http.post<Customer>(this._url,customerDiscount).pipe(catchError(error=>{
       return throwError(()=>error.message||"Server Problem");
     }));
   }
   update(customerId:number,customerDiscount:Customer):Observable<Customer>{
    return this.http.patch<Customer>(this._url+customerId,customerDiscount).pipe(catchError(error=>{
      return throwError(()=>error.message||"Server Problem");
    }));
  }
   
   removeD(customerId:number):Observable<Customer>{
     return this.http.delete<Customer>(this._url+customerId).pipe(catchError(error=>{
       return throwError(()=>error.message||"Server Problem");
     }));
   }
}
