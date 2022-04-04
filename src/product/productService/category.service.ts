import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Category } from 'src/app/shared_classes_intefaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  _url:string="https://localhost:44338/api/Categories";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  getAll():Observable<Category[]>{
    return this.http.get<Category[]>(this._url)
    .pipe(catchError(this.errorHandler));
   }
   getByID(categoryId:number):Observable<Category>{
     return this.http.get<Category>(this._url+'/'+categoryId)
     .pipe(catchError(this.errorHandler));
   }
   insert(category:Category):Observable<any>{
     return this.http.post<Category>(this._url,JSON.stringify(category),this.httpOptions)
     .pipe(catchError(this.errorHandler));
   }
   update(categoryId:number,category:Category):Observable<any>{
    return this.http.put<Category>(this._url+'/'+categoryId,JSON.stringify(category),this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
   
   removeD(categoryId:number):Observable<any>{
     return this.http.delete<Category>(this._url+'/'+categoryId)
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
