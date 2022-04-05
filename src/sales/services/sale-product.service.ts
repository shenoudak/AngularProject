import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { SaleBillProduct } from 'src/app/shared_classes_intefaces/saleBillProduct';

@Injectable({
  providedIn: 'root'
})
export class SaleProductService {

  constructor(private http:HttpClient) { }
  _url:string="https://localhost:44338/api/SaleBillProducts";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })}
  getAll():Observable<SaleBillProduct[]>{
    return this.http.get<SaleBillProduct[]>(this._url)
    .pipe(catchError(this.errorHandler));
   }
   getByID(saleProductId:number):Observable<SaleBillProduct>{
     return this.http.get<SaleBillProduct>(this._url+'/'+saleProductId)
     .pipe(catchError(this.errorHandler));
   }
   insert(saleProduct:SaleBillProduct):Observable<any>{
     console.log(JSON.stringify(saleProduct));
     return this.http.post<SaleBillProduct>(this._url,JSON.stringify(saleProduct),this.httpOptions)
     .pipe(catchError(this.errorHandler));
   }
   update(saleProductId:number,saleProduct:SaleBillProduct):Observable<any>{
     console.log(JSON.stringify(saleProduct));
    return this.http.put<SaleBillProduct>(this._url+'/'+saleProductId,JSON.stringify(saleProduct),this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
   
   removeD(saleProductId:number):Observable<any>{
     return this.http.delete<SaleBillProduct>(this._url+'/'+saleProductId)
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
