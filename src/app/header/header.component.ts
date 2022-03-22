import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpenClosedDashboardService } from '../sharedServics/open-closed-dashboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpened:boolean=false;
  constructor(private router:Router,private toogleNavService:OpenClosedDashboardService) { }

  ngOnInit(): void {
  }
  toogleNavSideBar(){

    this.isOpened=!this.isOpened;
    this.toogleNavService.clickToToggle(this.isOpened);
    
   /* this.router.navigate(["/home",{isClicked:this.isOpened}]);
    */
  }

}
