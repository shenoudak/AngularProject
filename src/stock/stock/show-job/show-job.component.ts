import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
import { Job } from 'src/app/shared_classes_intefaces/job';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-show-job',
  templateUrl: './show-job.component.html',
  styleUrls: ['./show-job.component.scss']
})
export class ShowJobComponent implements OnInit {

  constructor(private router:Router,private dialogService:ConfirmDeleteService,private jobService:JobService ) { }
  displayedColumns: string[] = ['title','description','actions'];
  dataSource:any=[];
  jobList: Job []=[];
  ngOnInit(): void 
  {
    this.jobService.getAll().subscribe(data=>{
      this.jobList=data;
      this.dataSource=this.jobList;
      console.log(this.dataSource);
    },error=>{
      console.log(error);
    })
  }
 
  navigateToAddJob(){
    this.router.navigate(['/home/stock/addJob']);
  }
  NavigationToEditjob(id:any){
    this.router.navigate(['/home/stock/editJob',{id:id}]);
    console.log(id);
  }
  deleteJob(id:any){
    console.log(id);
    this.dialogService.openConfirmDialog().afterClosed().subscribe(res=>{
      console.log(id);
      if(res==true){
        this.jobService.removeD(id).subscribe(res=>{
          this.jobService.getAll().subscribe(data=>{
            this.jobList=data;
            this.dataSource=this.jobList;
          })
          console.log('delete successfully');
        },error=>{
          console.log(error);
        });
      }
    });
  }


}
