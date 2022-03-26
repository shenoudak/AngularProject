import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddJobComponent } from './add-job/add-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { DeleteJobComponent } from './delete-job/delete-job.component';
import { ShowJobComponent } from './show-job/show-job.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddJobComponent,
    EditJobComponent,
    DeleteJobComponent,
    ShowJobComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
       AddJobComponent,
       ShowJobComponent,
       EditJobComponent,
       DeleteJobComponent,
      
  ]
})
export class JobModule { }
