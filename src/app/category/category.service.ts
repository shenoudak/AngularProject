import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from './ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  private _url:any="https://jsonplaceholder.typicode.com/comments"
  //#region services for show all category
  showCategory():Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this._url);
  }
  //#endregion

  //#region sevuces for update category
//   updateCategory(id: string, params: any) {
    
//     return this.http.put(this._url+"/"+id, params);
// } 
//#endregion

//#region services for get category by id
// getCategoryById(id: string) {
//   return this.http.get<ICategory>(this._url+"/"+id);
// } 
//#endregion

//#region  Sevices For Delete Category
// deleteCategory(id: string) {
//   return this.http.delete(this._url+"/"+id);
// } 
//#endregion
}
