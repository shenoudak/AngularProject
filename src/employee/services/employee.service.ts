import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Employee } from 'src/app/shared_classes_intefaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  _url:string="https://localhost:44338/api/employees";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  getAll():Observable<Employee[]>{
    return this.http.get<Employee[]>(this._url)
    .pipe(catchError(this.errorHandler));
   }
   getByID(employeeId:number):Observable<Employee>{
     return this.http.get<Employee>(this._url+'/'+employeeId)
     .pipe(catchError(this.errorHandler));
   }
   insert(employee:Employee):Observable<any>{
     return this.http.post<Employee>(this._url,JSON.stringify(employee),this.httpOptions)
     .pipe(catchError(this.errorHandler));
   }
   update(employeeId:number,employee:Employee):Observable<any>{
     console.log(JSON.stringify(employee));
    return this.http.put<Employee>(this._url+'/'+employeeId,JSON.stringify(employee),this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
   
   removeD(employeeId:number):Observable<any>{
     return this.http.delete<Employee>(this._url+'/'+employeeId)
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
