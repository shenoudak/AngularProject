import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Customer } from 'src/app/shared_classes_intefaces/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  _url:string="https://localhost:44338/api/clients";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  getAll():Observable<Customer[]>{
    return this.http.get<Customer[]>(this._url)
    .pipe(catchError(this.errorHandler));
   }
   getByID(customerId:number):Observable<Customer>{
     return this.http.get<Customer>(this._url+'/'+customerId)
     .pipe(catchError(this.errorHandler));
   }
   insert(customer:Customer):Observable<any>{
     return this.http.post<Customer>(this._url,JSON.stringify(customer),this.httpOptions)
     .pipe(catchError(this.errorHandler));
   }
   update(customerId:number,customer:Customer):Observable<any>{
     console.log(JSON.stringify(customer));
    return this.http.put<Customer>(this._url+'/'+customerId,JSON.stringify(customer),this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
   
   removeD(customerId:number):Observable<any>{
     return this.http.delete<Customer>(this._url+'/'+customerId)
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
