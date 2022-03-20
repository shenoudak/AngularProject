import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toogleListProduct:boolean=true;
  toogleListPurshase:boolean=true;
  toogleListSales:boolean=true;
  toogleListReport:boolean=true;
  toogleProductList(){
    this.toogleListProduct=!this.toogleListProduct;
  }
  tooglepurshaseList(){
    this.toogleListPurshase=!this.toogleListPurshase;
  }
  toogleSalesList(){
    this.toogleListSales=!this.toogleListSales;
  }
  toogleReportList(){
this.toogleListReport=!this.toogleListReport
  }
}
