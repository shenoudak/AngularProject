import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDeleteService {

  constructor(private dialog:MatDialog) { }
  openConfirmDialog(){
   return this.dialog.open(ConfirmDeleteComponent,{
      width:'390px',
      disableClose:true,
    },);
  }
}
