import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-show-stock',
  templateUrl: './show-stock.component.html',
  styleUrls: ['./show-stock.component.scss']
})
export class ShowStockComponent implements OnInit {

  constructor(private router:Router,private activateRoute:ActivatedRoute) { }
  stockList:any[]=[{id:1,name:"main",address:"assiut"},{id:2,name:"main",address:"assiut"},{id:3,name:"main",address:"assiut"}];
  ngOnInit(): void {
  }
  navigateToAddStock(){
    this.router.navigate(['/home/stock/add'])
  }
  NavigationToEdit(id:number){
    this.router.navigate(['/home/stock/edit',{id:id}]);
    console.log(id);
  }
}
