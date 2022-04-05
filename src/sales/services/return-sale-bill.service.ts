import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ReturnSaleBill } from 'src/app/shared_classes_intefaces/returnSaleBill';

@Injectable({
  providedIn: 'root'
})
export class ReturnSaleBillService {

  constructor(private http:HttpClient) { 
    console.log("Hello");
  }
  _url:string="https://localhost:44338/api/SalesReturnsBills";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })}
  getAll():Observable<ReturnSaleBill[]>{
    return this.http.get<ReturnSaleBill[]>(this._url)
    .pipe(catchError(this.errorHandler));
   }
   getByID(returnSBId:number):Observable<ReturnSaleBill>{
     return this.http.get<ReturnSaleBill>(this._url+'/'+returnSBId)
     .pipe(catchError(this.errorHandler));
   }
   insert(returnSBill:ReturnSaleBill):Observable<any>{
     console.log(JSON.stringify(returnSBill));
     console.log("URL="+this._url);
     return this.http.post<ReturnSaleBill>(this._url,JSON.stringify(returnSBill),this.httpOptions)
     .pipe(catchError(this.errorHandler));
   }
   update(returnSBId:number,returnSBill:ReturnSaleBill):Observable<any>{
     console.log(JSON.stringify(returnSBill));
    return this.http.put<ReturnSaleBill>(this._url+'/'+returnSBId,JSON.stringify(returnSBill),this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
   
   removeD(returnSBId:number):Observable<any>{
     return this.http.delete<ReturnSaleBill>(this._url+'/'+returnSBId)
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
