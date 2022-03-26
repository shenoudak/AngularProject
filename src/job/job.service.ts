import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { IJob } from './IJob';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }
  private _url:any="https://localhost:44338/api/Jobs";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  //#region services for showJob
  showJob():Observable<IJob[]>{
    return this.http.get<IJob[]>(this._url);
  }
  //#endregion

  //#region sevuces updateJob
  updateJob(id: number, data: any) {
    
    return this.http.put(this._url+"/"+id,  JSON.stringify(data), this.httpOptions);
} 
//#endregion
//#region 
addJob(data: any):Observable<any>{
  return this.http.post(this._url,  JSON.stringify(data), this.httpOptions)
}
//#endregion

//#region services for get category by id
getJobById(id: any) {
  return this.http.get<IJob>(this._url+"/"+id);
} 
//#endregion

//#region  Sevices For Delete Category
deleteJob(id: any) {
  return this.http.delete(this._url+"/"+id);
} 
//#endregion
}
