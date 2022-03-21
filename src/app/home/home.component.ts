import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute) { }
  toogleSideNavBar:any;
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.activateRoute.paramMap.subscribe((params)=>{
      this.toogleSideNavBar=params.get('isClicked');
    });
    console.log(this.toogleSideNavBar);
  }

}
