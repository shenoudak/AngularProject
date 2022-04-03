import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ExpenseType } from 'src/app/shared_classes_intefaces/expenseType';

@Injectable({
  providedIn: 'root'
})
export class ExpenseTypeService {

  _url:string="https://localhost:44338/api/expenseTypes";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  getAll():Observable<ExpenseType[]>{
    return this.http.get<ExpenseType[]>(this._url)
    .pipe(catchError(this.errorHandler));
   }
   getByID(expenseTypeId:number):Observable<ExpenseType>{
     return this.http.get<ExpenseType>(this._url+'/'+expenseTypeId)
     .pipe(catchError(this.errorHandler));
   }
   insert(expenseType:ExpenseType):Observable<any>{
     return this.http.post<ExpenseType>(this._url,JSON.stringify(expenseType),this.httpOptions)
     .pipe(catchError(this.errorHandler));
   }
   update(expenseTypeId:number,expenseType:ExpenseType):Observable<any>{
    return this.http.put<ExpenseType>(this._url+'/'+expenseTypeId,JSON.stringify(expenseType),this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
   
   removeD(expenseTypeId:number):Observable<any>{
     return this.http.delete<ExpenseType>(this._url+'/'+expenseTypeId)
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
