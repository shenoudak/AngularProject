import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpened:boolean=true;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  toogleNavSideBar(){
    this.isOpened=!this.isOpened;
    this.router.navigate(["/home",{isClicked:this.isOpened}]);
  }

}
