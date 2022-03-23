import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Stock } from 'src/app/shared_classes_intefaces/stock';
@Injectable({
  providedIn: 'root'
})
export class StockService {
  _url:string="https://localhost:44338/api/stock";
  constructor(private http:HttpClient) { 
  }
  getAll():Observable<Stock[]>{
   return this.http.get<Stock[]>(this._url).pipe(catchError(error=>{
      return throwError(()=>error.message||"Server Problem");
    }));
  }
  getByID(stockId:number):Observable<Stock>{
    return this.http.get<Stock>(this._url+'/'+stockId).pipe(catchError(error=>{
      return throwError(()=>error.message||"Server Problem");
    }));
  }
  insert(stock:Stock):Observable<Stock>{
    const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json','Accept': 'application/json;charset=UTF-8'})};
    const body= JSON.stringify(stock);
    return this.http.post<Stock>(this._url,body,httpOptions).pipe(catchError(error=>{
      return throwError(()=>error.message||"Server Problem");
    }));
  }
  update(stockId:number,customerDiscount:Stock):Observable<Stock>{
    return this.http.patch<Stock>(this._url+stockId,customerDiscount).pipe(catchError(error=>{
      return throwError(()=>error.message||"Server Problem");
    }));
  }
  removeD(stockId:number):Observable<Stock>{
    return this.http.delete<Stock>(this._url+'/'+stockId).pipe(catchError(error=>{
      return throwError(()=>error.message||"Server Problem");
    }));
  }
}
