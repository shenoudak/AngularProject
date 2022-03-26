import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from './ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  private _url:any="https://localhost:44338/api/Categories";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  //#region services for show all category
  showCategory():Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this._url);
  }
  //#endregion

  //#region sevuces for update category
  updateCategory(id: number, data: any) {
    
    return this.http.put(this._url+"/"+id, JSON.stringify(data), this.httpOptions);
} 
//#endregion
//#region 
addCategory(data: any): Observable<any> {
  return this.http.post(this._url, JSON.stringify(data), this.httpOptions)
}
//#endregion

//#region services for get category by id
getCategoryById(id: any) {
  return this.http.get<ICategory>(this._url+"/"+id);
} 
//#endregion

//#region  Sevices For Delete Category
deleteCategory(id: any) {
  return this.http.delete(this._url+"/"+id);
} 
//#endregion
}
