import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/shared_classes_intefaces/job';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent implements OnInit {

  constructor(private fb:FormBuilder,private jobService:JobService,private router:Router,private activatedRoute:ActivatedRoute) { }
  jobId:any;
  jobObject:Job={} as Job;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parms=>{
      this.jobId=parms.get('id');
       console.log(this.jobId);
        this.jobService.getByID(this.jobId).subscribe(data=>{
       this.jobObject=data;
       console.log(this.jobObject);
       this.registrationForm.get('Title')?.patchValue(this.jobObject.jobTitle);
       this.registrationForm.get('Description')?.patchValue(this.jobObject.jobDescription);
     })
 })}
  get Title(){  
    return this.registrationForm.get('Title');
   }
   get Description(){  
    return this.registrationForm.get('Description');
   } 
   registrationForm=this.fb.group(
     {
       Title:['',[Validators.required,Validators.minLength(5)]],
      Description:['',],
     }
   );
   jobObj:Job={} as Job;
    SaveData(){
      this.jobObj=new Job(this.Title?.value,this.Description?.value);
      this.jobObj.id=this.jobId;
      this.jobService.update(this.jobId,this.jobObj).subscribe(data=>{
        console.log(data);
        this.router.navigate(['home/stock/showJob']);
        
      },error=>{
        console.log(error);
      });
      
      console.log(this.jobObj);
}
}
