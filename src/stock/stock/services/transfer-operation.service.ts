import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { TransferOperation } from 'src/app/shared_classes_intefaces/transferOperation';

@Injectable({
  providedIn: 'root'
})
export class TransferOperationService {

 
  _url:string="https://localhost:44338/api/transferoperations";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  getAll():Observable<TransferOperation[]>{
    return this.http.get<TransferOperation[]>(this._url)
    .pipe(catchError(this.errorHandler));
   }
   getByID(transferOperationId:number):Observable<TransferOperation>{
     return this.http.get<TransferOperation>(this._url+'/'+transferOperationId)
     .pipe(catchError(this.errorHandler));
   }
   insert(transferOperation:TransferOperation):Observable<any>{
     return this.http.post<TransferOperation>(this._url,JSON.stringify(transferOperation),this.httpOptions)
     .pipe(catchError(this.errorHandler));
   }
   update(transferOperationId:number,transferOperation:TransferOperation):Observable<any>{
     console.log(JSON.stringify(TransferOperation));
    return this.http.put<TransferOperation>(this._url+'/'+transferOperationId,JSON.stringify(transferOperation),this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
   
   removeD(transferOperationId:number):Observable<any>{
     return this.http.delete<TransferOperation>(this._url+'/'+transferOperationId)
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
