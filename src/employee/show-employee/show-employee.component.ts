import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
import { Employee } from 'src/app/shared_classes_intefaces/employee';
import { Stock } from 'src/app/shared_classes_intefaces/stock';
import { IJob } from 'src/job/IJob';
import { JobService } from 'src/job/job.service';
import { StockService } from 'src/stock/stock/stock.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.scss']
})
export class ShowEmployeeComponent implements OnInit {

  constructor(private router:Router,private dialogService:ConfirmDeleteService,private employeeService:EmployeeService,private jobService:JobService,private stockService:StockService ) { }
  employeeList:Employee[]=[];
  stock:Stock={} as Stock;
  stockNamesList:any[]=[];
  jobtitleNamesList:any=[];
  isCheckedList:boolean[]=[];
  job:IJob={} as IJob;
  isCheckedPro:boolean=false;
  ngOnInit(): void {
    this.employeeService.getAll().subscribe(data=>{
      this.employeeList=data;
      console.log(data);
      for(let element of this.employeeList){
        if(element.haveAccess===1)
        this.isCheckedList.push(true);
         this.stockService.getByID(element.stockId).subscribe(res=>{
         this.stock=res;
         this.stockNamesList.push(this.stock.name);
         },error=>{
           console.log(error);
         });
         this.jobService.getJobById(element.jobId).subscribe(res=>{
         this.job=res;
         this.jobtitleNamesList.push(this.job.jobTitle);
        
        },error=>{
           console.log(error);
         });
        }
         
       },error=>{
         console.log(error);
       })
      console.log(this.isCheckedPro);
    
  }
  navigateToAddEmployee(){
    this.router.navigate(['/home/employee/addEmployee']);
  }
  NavigationToEditEmployee(id:number){
    this.router.navigate(['/home/employee/editEmployee',{id:id}]);
    console.log(id);
  }
  deleteEmployee(id:number){
    this.dialogService.openConfirmDialog().afterClosed().subscribe(res=>{
      if(res==true){
        this.employeeService.removeD(id).subscribe(res=>{
          console.log('delete successfully');
          this.employeeService.getAll().subscribe(data=>{
            this.employeeList=data;
          },error=>{console.log(error)});
        },error=>{
          console.log(error);
        });
      }
    });
  }



}
