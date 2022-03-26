import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CustomerType } from 'src/app/shared_classes_intefaces/customerType';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  _url:string="https://localhost:44338/api/TraderTypes";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  getAll():Observable<CustomerType[]>{
    return this.http.get<CustomerType[]>(this._url)
    .pipe(catchError(this.errorHandler));
   }
   getByID(customerTypeId:number):Observable<CustomerType>{
     return this.http.get<CustomerType>(this._url+'/'+customerTypeId)
     .pipe(catchError(this.errorHandler));
   }
   insert(customerType:CustomerType):Observable<any>{
     return this.http.post<CustomerType>(this._url,JSON.stringify(customerType),this.httpOptions)
     .pipe(catchError(this.errorHandler));
   }
   update(customerTypeId:number,customerType:CustomerType):Observable<any>{
    return this.http.put<CustomerType>(this._url+'/'+customerTypeId,JSON.stringify(customerType),this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
   
   removeD(customerTypeId:number):Observable<any>{
     return this.http.delete<CustomerType>(this._url+'/'+customerTypeId)
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
