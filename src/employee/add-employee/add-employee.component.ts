import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/shared_classes_intefaces/employee';
import { Job } from 'src/app/shared_classes_intefaces/job';
import { Stock } from 'src/app/shared_classes_intefaces/stock';
import { JobService } from 'src/stock/stock/services/job.service';
import { StockService } from 'src/stock/stock/stock.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private fb:FormBuilder,private employeeService:EmployeeService,private stockService:StockService,private jobService:JobService,private router:Router) { }
  stockList:Stock[]=[];
  jobList:Job[]=[];
  ngOnInit(): void {
    this.stockService.getAll().subscribe(data=>{
      this.stockList=data;
      console.log(this.stockList);
    },error=>{
      console.log(error);
    }),
    this.jobService.getAll().subscribe(data=>{
      this.jobList=data;
      console.log(this.jobList);
    },error=>{
      console.log(error);
    })
  }
  get Name(){  
    return this.registrationForm.get('Name');
   }
   get Address(){  
    return this.registrationForm.get('Address');
   }
   get NationalId(){  
    return this.registrationForm.get('NationalId');
   }
   
   get Salary(){  
    return this.registrationForm.get('Salary');
   }
   get Phone(){  
    return this.registrationForm.get('Phone');
   }
   get Photo(){  
    return this.registrationForm.get('Photo');
   }
   get HaveAccess(){  
    return this.registrationForm.get('HaveAccess');
   }
   get StockId(){  
    return this.registrationForm.get('StockId');
   }
   get JobId(){  
    return this.registrationForm.get('JobId');
   }
   registrationForm=this.fb.group(
     {
      Name:['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z ]*')]],
      NationalId:['',[Validators.required,Validators.pattern('^[0-9]+$'),Validators.minLength(14),Validators.maxLength(14)]],
      Phone:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      Salary:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      Address:['',[Validators.required,Validators.minLength(5)],],
      Photo:['',],
      HaveAccess:[false],
      StockId:['',[Validators.required]],
      JobId:['',[Validators.required]],
     }
   );
   isSelectedDefault=false;
   checkSelectedValue(value:any){
     console.log(value);
     console.log(typeof(value));
     this.isSelectedDefault=true?value=="0":false;
     console.log(this.isSelectedDefault)
   }
   haveAccessValue:number=0;
   employee:any;
    SaveData(){
      //this.haveAccessValue=this.HaveAccess?.value==true?1:0;
      //parseInt(this.TypeId?.value);
      this.employee=new Employee(this.Name?.value,this.Address?.value,this.NationalId?.value,this.Phone?.value,this.Salary?.value,"",this.HaveAccess?.value,this.StockId?.value,this.JobId?.value);

      this.employeeService.insert(this.employee).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/home/employee']);
      },error=>{
        console.log(error);
      });
      
      console.log(this.employee);
}


}
