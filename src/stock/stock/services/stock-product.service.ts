import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { StockProduct } from 'src/app/shared_classes_intefaces/stockProduct';

@Injectable({
  providedIn: 'root'
})
export class StockProductService {

  _url:string="https://localhost:44338/api/StockProducts";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  getAll():Observable<StockProduct[]>{
    return this.http.get<StockProduct[]>(this._url)
    .pipe(catchError(this.errorHandler));
   }
   getByID(stockPId:number):Observable<StockProduct>{
     return this.http.get<StockProduct>(this._url+'/'+stockPId)
     .pipe(catchError(this.errorHandler));
   }
   insert(stockProduct:StockProduct):Observable<any>{
     return this.http.post<StockProduct>(this._url,JSON.stringify(stockProduct),this.httpOptions)
     .pipe(catchError(this.errorHandler));
   }
   update(stockPId:number,stockProduct:StockProduct):Observable<any>{
     console.log(JSON.stringify(stockProduct));
    return this.http.put<StockProduct>(this._url+'/'+stockPId,JSON.stringify(stockProduct),this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
   
   removeD(stockPId:number):Observable<any>{
     return this.http.delete<StockProduct>(this._url+'/'+stockPId)
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
