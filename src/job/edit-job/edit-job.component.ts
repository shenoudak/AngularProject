import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  editJob=this.fb.group({
    Title:['',Validators.required],
   Describtion:['',Validators.required]
  })

  ngOnInit(): void {
  }

}
