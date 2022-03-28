import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from 'src/app/shared_classes_intefaces/peoduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  _url:string="https://localhost:44338/api/products";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(this._url)
    .pipe(catchError(this.errorHandler));
   }
   getByID(productId:number):Observable<Product>{
     return this.http.get<Product>(this._url+'/'+productId)
     .pipe(catchError(this.errorHandler));
   }
   insert(product:Product):Observable<any>{
     return this.http.post<Product>(this._url,JSON.stringify(product),this.httpOptions)
     .pipe(catchError(this.errorHandler));
   }
   update(productId:number,product:Product):Observable<any>{
    return this.http.put<Product>(this._url+'/'+productId,JSON.stringify(product),this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
   
   removeD(productId:number):Observable<any>{
     return this.http.delete<Product>(this._url+'/'+productId)
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
