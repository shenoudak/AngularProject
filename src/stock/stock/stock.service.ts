import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Stock } from 'src/app/shared_classes_intefaces/stock';
@Injectable({
  providedIn: 'root'
})
export class StockService {
  _url:string="https://localhost:44338/api/stocks";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { 
  }
  getAll():Observable<Stock[]>{
   return this.http.get<Stock[]>(this._url).pipe(catchError(this.errorHandler));
  }
  getByID(stockId:number):Observable<Stock>{
    return this.http.get<Stock>(this._url+'/'+stockId)
    .pipe(catchError(this.errorHandler));
  }
  insert(stock:Stock):Observable<any>{
    //const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json','Accept': 'application/json;charset=UTF-8'})};
    return this.http.post<Stock>(this._url,JSON.stringify(stock),this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
  update(stockId:number,stock:Stock):Observable<any>{
    return this.http.put<Stock>(this._url+'/'+stockId,JSON.stringify(stock),this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
  removeD(stockId:number):Observable<any>{
    return this.http.delete<Stock>(this._url+'/'+stockId).pipe(catchError(this.errorHandler));
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
