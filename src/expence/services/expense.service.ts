import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Expense } from 'src/app/shared_classes_intefaces/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  _url:string="https://localhost:44338/api/expenses";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  getAll():Observable<Expense[]>{
    return this.http.get<Expense[]>(this._url)
    .pipe(catchError(this.errorHandler));
   }
   getByID(expenseId:number):Observable<Expense>{
     return this.http.get<Expense>(this._url+'/'+expenseId)
     .pipe(catchError(this.errorHandler));
   }
   insert(expense:Expense):Observable<any>{
     console.log(JSON.stringify(expense));
     return this.http.post<Expense>(this._url,JSON.stringify(expense),this.httpOptions)
     .pipe(catchError(this.errorHandler));
   }
   update(expenseId:number,expense:Expense):Observable<any>{
    return this.http.put<Expense>(this._url+'/'+expenseId,JSON.stringify(expense),this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
   
   removeD(expenseId:number):Observable<any>{
     return this.http.delete<Expense>(this._url+'/'+expenseId)
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
