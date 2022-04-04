import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ExpiredProduct } from 'src/app/shared_classes_intefaces/expiredProduct';

@Injectable({
  providedIn: 'root'
})
export class ExpiredProductService {

  _url:string="https://localhost:44338/api/ExpiredProducts";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  getAll():Observable<ExpiredProduct[]>{
    return this.http.get<ExpiredProduct[]>(this._url)
    .pipe(catchError(this.errorHandler));
   }
   getByID(expProductId:number):Observable<ExpiredProduct>{
     return this.http.get<ExpiredProduct>(this._url+'/'+expProductId)
     .pipe(catchError(this.errorHandler));
   }
   insert(expiredProduct:ExpiredProduct):Observable<any>{
     return this.http.post<ExpiredProduct>(this._url,JSON.stringify(expiredProduct),this.httpOptions)
     .pipe(catchError(this.errorHandler));
   }
   update(expProductId:number,expiredProduct:ExpiredProduct):Observable<any>{
    return this.http.put<ExpiredProduct>(this._url+'/'+expProductId,JSON.stringify(expiredProduct),this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
   
   removeD(expProductId:number):Observable<any>{
     return this.http.delete<ExpiredProduct>(this._url+'/'+expProductId)
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
