import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Supplier } from 'src/app/shared_classes_intefaces/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

    _url:string="https://localhost:44338/api/suppliers";
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    constructor(private http:HttpClient) { 
    }
    getAll():Observable<Supplier[]>{
     return this.http.get<Supplier[]>(this._url).pipe(catchError(this.errorHandler));
    }
    getByID(supplierId:number):Observable<Supplier>{
      return this.http.get<Supplier>(this._url+'/'+supplierId)
      .pipe(catchError(this.errorHandler));
    }
    insert(supplier:Supplier):Observable<any>{
      //const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json','Accept': 'application/json;charset=UTF-8'})};
      return this.http.post<Supplier>(this._url,JSON.stringify(supplier),this.httpOptions)
      .pipe(catchError(this.errorHandler));
    }
    update(supplierId:number,supplier:Supplier):Observable<any>{
      return this.http.put<Supplier>(this._url+'/'+supplierId,JSON.stringify(supplier),this.httpOptions)
      .pipe(catchError(this.errorHandler));
    }
    removeD(supplierId:number):Observable<any>{
      return this.http.delete<Supplier>(this._url+'/'+supplierId).pipe(catchError(this.errorHandler));
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
  
