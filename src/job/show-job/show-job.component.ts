import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
import { JobService } from '../job.service';

@Component({
  selector: 'app-show-job',
  templateUrl: './show-job.component.html',
  styleUrls: ['./show-job.component.scss']
})
export class ShowJobComponent implements OnInit {

  constructor(private router:Router,private confirmDeleteService:ConfirmDeleteService,private jobServices:JobService ) { }
//   job=[{
//     id:1,
//     jobTitle:"Engineer",
//     jobDecribtion:"Engineering"
//   },
//   {
//     id:2,
//     jobTitle:"doctor",
//     jobDecribtion:"Medicin"
//   },
//   {
//     id:3,
//     jobTitle:"Teacher",
//     jobDecribtion:"Lening"
//   },
// ]
Job:any;
NavigationToEdit(id:number){
  this.router.navigate(['/editJob/'+id]);
  console.log(id);
}
NavigationToAdd(){
  this.router.navigate(['/addJob']);
}
NavigationToDelete(id:number){
  // this.router.navigate(['/deleteJob/'+id]);
  // console.log(id);
  this.confirmDeleteService.openConfirmDialog().afterClosed().subscribe(res=>{
    if(res==true){
      this.jobServices.deleteJob(id).subscribe(data=>{
        console.log(data);
      },error=>{
        console.log(error);
      })
    }
  })
}
  ngOnInit(): void {
    this.jobServices.showJob().subscribe(data=>{
      this.Job=data;
    })
  }

}
