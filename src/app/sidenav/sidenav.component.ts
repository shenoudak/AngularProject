import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute) { }
  toogleSideNavBar:any;
  ngOnInit(): void {
    
  }
  toogleListProduct:boolean=true;
  toogleListPurshase:boolean=true;
  toogleListSales:boolean=true;
  toogleListReport:boolean=true;
  toogleListStocks:boolean=true;
  toogleListCustomer:boolean=true;
  toogleListExpense:boolean=true;
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
  toogleStocksList(){
    this.toogleListStocks=!this.toogleListStocks
    }
    toogleCustomerList(){
      this.toogleListCustomer=!this.toogleListCustomer
      }
      toogleExpenseList(){
      this.toogleListExpense=!this.toogleListExpense;

      }

  

}
