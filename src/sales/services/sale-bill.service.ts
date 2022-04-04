import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { SaleBill } from 'src/app/shared_classes_intefaces/saleBill';

@Injectable({
  providedIn: 'root'
})
export class SaleBillService {
//https://localhost:44338/api/SaleBills/id/1/SaleProducts
  _url:string="https://localhost:44338/api/saleBills";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  getAll():Observable<SaleBill[]>{
    return this.http.get<SaleBill[]>(this._url)
    .pipe(catchError(this.errorHandler));
   }
   getByID(saleBillId:number):Observable<SaleBill>{
     return this.http.get<SaleBill>(this._url+'/'+saleBillId)
     .pipe(catchError(this.errorHandler));
   }
   getSaleProducts(saleBillId:number):Observable<any>{
    return this.http.get<any>(this._url+'/id/'+saleBillId+'/SaleProducts')
    .pipe(catchError(this.errorHandler));
  }
  getSaleProductsByBillCod(saleBillCode:number):Observable<any>{
    return this.http.get<any>(this._url+'/code/'+saleBillCode+'/SaleProducts')
    .pipe(catchError(this.errorHandler));
  }
   insert(saleBill:SaleBill):Observable<any>{
     console.log(JSON.stringify(saleBill));
     return this.http.post<SaleBill>(this._url,JSON.stringify(saleBill),this.httpOptions)
     .pipe(catchError(this.errorHandler));
   }
   update(saleBillId:number,saleBill:SaleBill):Observable<any>{
     console.log(JSON.stringify(saleBill));
    return this.http.put<SaleBill>(this._url+'/'+saleBillId,JSON.stringify(saleBill),this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
   
   removeD(saleBillId:number):Observable<any>{
     return this.http.delete<SaleBill>(this._url+'/'+saleBillId)
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
