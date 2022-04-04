import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Job} from 'src/app/shared_classes_intefaces/job';
import { JobService } from '../services/job.service';


@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {

  constructor(private fb:FormBuilder,private jobService:JobService,private router:Router) { }
  ngOnInit(): void {
 }
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
     this.jobService.insert(this.jobObj).subscribe(data=>{
       console.log(data);
       this.router.navigate(['home/stock/showJob']);
       
     },error=>{
       console.log(error);
     });
     
     console.log(this.jobObj);
   }


}
