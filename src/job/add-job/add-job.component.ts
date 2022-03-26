import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '../job.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {


  constructor(private fb:FormBuilder,private jobservices:JobService,private router:Router) { }
  addjob1=this.fb.group({
    jobTitle:['',Validators.required],
    jobDescription:['',Validators.required]
   });
   submitForm(){
    this.jobservices.addJob(this.addjob1.value).subscribe(res => {
      console.log('job created!')
      this.router.navigate(['/showJob'])
   })
  }
  ngOnInit(): void {
  }

}
