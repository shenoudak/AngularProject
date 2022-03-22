import { Component, OnInit } from '@angular/core';
import { OpenClosedDashboardService } from './sharedServics/open-closed-dashboard.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'graduationProject';
  toogle:any;
  constructor(private toogleNavbarservice:OpenClosedDashboardService){}
  ngOnInit(): void {
   this.toogleNavbarservice.reciveToogle().subscribe(data=>{
     console.log(data);
     this.toogle=data;
     console.log(data);
   })
  }
  

 
}

