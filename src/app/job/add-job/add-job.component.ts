import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {


  constructor(private fb:FormBuilder) { }
  addjob=this.fb.group({
    Title:['',Validators.required],
    Describtion:['',Validators.required]
   });
  ngOnInit(): void {
  }

}
