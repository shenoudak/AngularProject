import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { PaymentM } from 'src/app/shared_classes_intefaces/paymentM';

@Injectable({
  providedIn: 'root'
})
export class PaymentMService {

  _url:string="https://localhost:44338/api/PaymentMethods";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  getAll():Observable<PaymentM[]>{
    return this.http.get<PaymentM[]>(this._url)
    .pipe(catchError(this.errorHandler));
   }
   getByID(paymentMId:number):Observable<PaymentM>{
     return this.http.get<PaymentM>(this._url+'/'+paymentMId)
     .pipe(catchError(this.errorHandler));
   }
   insert(paymentM:PaymentM):Observable<any>{
     console.log(JSON.stringify(paymentM));
     return this.http.post<PaymentM>(this._url,JSON.stringify(paymentM),this.httpOptions)
     .pipe(catchError(this.errorHandler));
   }
   update(paymentMId:number,paymentM:PaymentM):Observable<any>{
    return this.http.put<PaymentM>(this._url+'/'+paymentMId,JSON.stringify(paymentM),this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
   
   removeD(paymentMId:number):Observable<any>{
     return this.http.delete<PaymentM>(this._url+'/'+paymentMId)
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
