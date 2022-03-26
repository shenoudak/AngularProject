import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Tax } from 'src/app/shared_classes_intefaces/tax';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  _url:string="https://localhost:44338/api/taxes";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  getAll():Observable<Tax[]>{
    return this.http.get<Tax[]>(this._url)
    .pipe(catchError(this.errorHandler));
   }
   getByID(taxId:number):Observable<Tax>{
     return this.http.get<Tax>(this._url+'/'+taxId)
     .pipe(catchError(this.errorHandler));
   }
   insert(tax:Tax):Observable<any>{
     return this.http.post<Tax>(this._url,JSON.stringify(tax),this.httpOptions)
     .pipe(catchError(this.errorHandler));
   }
   update(taxId:number,tax:Tax):Observable<any>{
    return this.http.put<Tax>(this._url+'/'+taxId,JSON.stringify(tax),this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
   
   removeD(taxId:number):Observable<any>{
     return this.http.delete<Tax>(this._url+'/'+taxId)
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
