import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Job } from 'src/app/shared_classes_intefaces/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {


  _url:string="https://localhost:44338/api/jobs";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  getAll():Observable<Job[]>{
    return this.http.get<Job[]>(this._url)
    .pipe(catchError(this.errorHandler));
   }
   getByID(jobId:number):Observable<Job>{
     return this.http.get<Job>(this._url+'/'+jobId)
     .pipe(catchError(this.errorHandler));
   }
   insert(job:Job):Observable<any>{
     return this.http.post<Job>(this._url,JSON.stringify(job),this.httpOptions)
     .pipe(catchError(this.errorHandler));
   }
   update(jobId:number,job:Job):Observable<any>{
     console.log(JSON.stringify(job));
    return this.http.put<Job>(this._url+'/'+jobId,JSON.stringify(job),this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
   
   removeD(jobId:number):Observable<any>{
     return this.http.delete<Job>(this._url+'/'+jobId)
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
