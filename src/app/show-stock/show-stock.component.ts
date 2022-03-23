import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from 'src/stock/stock/stock.service';
import { ConfirmDeleteService } from '../sharedServics/confirm-delete.service';
@Component({
  selector: 'app-show-stock',
  templateUrl: './show-stock.component.html',
  styleUrls: ['./show-stock.component.scss']
})
export class ShowStockComponent implements OnInit {

  constructor(private router:Router,private activateRoute:ActivatedRoute,private confirmDeleteService:ConfirmDeleteService,private stockService:StockService ) { }
  stockList:any[]=[]//[{ID:1,name:"main",address:"assiut"},{ID:2,name:"main",address:"assiut"},{ID:3,name:"main",address:"assiut"}];
  ngOnInit(): void {
    this.stockService.getAll().subscribe((data)=>{
      this.stockList=data;
      console.log(data);
    },error=>{
      console.log(error);
    })
  }
  navigateToAddStock(){
    this.router.navigate(['/home/stock/add'])
  }
  NavigationToEdit(id:number){
    this.router.navigate(['/home/stock/edit',{id:id}]);
    console.log(id);
  }
  deleteStock(id:number){
    this.confirmDeleteService.openConfirmDialog().afterClosed().subscribe(res=>{
      if(res==true){
        this.stockService.removeD(id).subscribe(data=>{
          /*get All To Update Show-Stock*/ 
          this.stockService.getAll().subscribe((data)=>{
            this.stockList=data;
            console.log(data);
          },error=>{
            console.log(error);
          });
          console.log(data);
        },error=>{
          console.log(error);
        })
      }
    })
  }
}
