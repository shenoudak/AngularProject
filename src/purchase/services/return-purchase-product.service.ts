import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ReturnPurchaeProduct } from 'src/app/shared_classes_intefaces/returnPurchaseProduct';

@Injectable({
  providedIn: 'root'
})
export class ReturnPurchaseProductService {

  constructor(private http:HttpClient) { }
  _url:string="";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })}
  getAll():Observable<ReturnPurchaeProduct[]>{
    return this.http.get<ReturnPurchaeProduct[]>(this._url)
    .pipe(catchError(this.errorHandler));
   }
   getByID(returnPPId:number):Observable<ReturnPurchaeProduct>{
     return this.http.get<ReturnPurchaeProduct>(this._url+'/'+returnPPId)
     .pipe(catchError(this.errorHandler));
   }
   insert(returnPProduct:ReturnPurchaeProduct):Observable<any>{
     console.log(JSON.stringify(returnPProduct));
     return this.http.post<ReturnPurchaeProduct>(this._url,JSON.stringify(returnPProduct),this.httpOptions)
     .pipe(catchError(this.errorHandler));
   }
   update(returnPPId:number,returnPProduct:ReturnPurchaeProduct):Observable<any>{
     console.log(JSON.stringify(returnPProduct));
    return this.http.put<ReturnPurchaeProduct>(this._url+'/'+returnPPId,JSON.stringify(returnPProduct),this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
   
   removeD(returnPPId:number):Observable<any>{
     return this.http.delete<ReturnPurchaeProduct>(this._url+'/'+returnPPId)
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
