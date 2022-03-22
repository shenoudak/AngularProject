import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ConfirmDeleteService } from '../sharedServics/confirm-delete.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent implements OnInit {

  constructor(private dialogref:MatDialogRef<ConfirmDeleteService>) { }
  stockID:any;
  ngOnInit(): void {
    
  }
  
  closeDialog(){
    this.dialogref.close(false);
  }

}
