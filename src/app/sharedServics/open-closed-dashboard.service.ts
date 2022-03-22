import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenClosedDashboardService {
  private subject=new Subject<boolean>();
  clickToToggle(toogle:boolean){
    this.subject.next(toogle);

  }
  reciveToogle():Observable<boolean>{
    return this.subject.asObservable();
  }

  constructor() { }
}
