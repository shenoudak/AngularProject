import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/shared_classes_intefaces/employee';
import { Job } from 'src/app/shared_classes_intefaces/job';
import { Stock } from 'src/app/shared_classes_intefaces/stock';
import { JobService } from 'src/stock/stock/services/job.service';
import { StockService } from 'src/stock/stock/stock.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  constructor(private fb:FormBuilder,private activatedRoute:ActivatedRoute,private employeeService:EmployeeService,private stockService:StockService,private jobService:JobService,private router:Router) { }
  stockList:Stock[]=[];
  jobList:Job[]=[];
  hasAccessChecked:boolean=false;
  employee:Employee={}as Employee;
  employeeId:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parms=>{
      this.employeeId=parms.get('id');
      this.employeeService.getByID(this.employeeId).subscribe(data=>{
        this.employee=data;
        console.log(this.employee);
        this.hasAccessChecked=this.employee.haveAccess==1?true:false;
        this.stockService.getAll().subscribe(data=>{
          this.stockList=data;}
          ,error=>{
            console.log(error);
          });
          this.jobService.getAll().subscribe(data=>{
            this.jobList=data;
            }
            ,error=>{
              console.log(error);
            });
            console.log(this.employee)
      this.registrationForm.get('Name')?.patchValue(this.employee.name);
      this.registrationForm.get('Address')?.patchValue(this.employee.address);
      this.registrationForm.get('NationalId')?.patchValue(this.employee.nationalId);
      this.registrationForm.get('Salary')?.patchValue(this.employee.salary);
      this.registrationForm.get('Phone')?.patchValue(this.employee.phone);
      this.registrationForm.get('HaveAccess')?.patchValue(this.hasAccessChecked);
      this.registrationForm.get('StockId')?.patchValue(this.employee.stockId);
      this.registrationForm.get('JobId')?.patchValue(this.employee.jobId);
        },error=>{console.log(error);
        });
    // this.getEmployee(this.employeeId);
     
  });
  
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
   employeeObj:Employee={} as Employee;
    SaveData(){
      //this.haveAccessValue=this.HaveAccess?.value==true?1:0;
      //parseInt(this.TypeId?.value);
      this.employeeObj=new Employee(this.Name?.value,this.Address?.value,this.NationalId?.value,this.Phone?.value,this.Salary?.value,"",this.HaveAccess?.value,this.StockId?.value,this.JobId?.value);
      this.employeeObj.id=this.employeeId;
      this.employeeService.update(this.employeeId,this.employeeObj).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/home/employee']);
      },error=>{
        console.log(error);
      });
      
      console.log(this.employee);
}
}
