import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
import { StockProductService } from '../stock-product.service';

@Component({
  selector: 'app-show-stock-product',
  templateUrl: './show-stock-product.component.html',
  styleUrls: ['./show-stock-product.component.scss']
})
export class ShowStockProductComponent implements OnInit {

  constructor(private _router:Router,private confirmDeleteService:ConfirmDeleteService,private stockProduct:StockProductService) { }
stockProductList=[
{ID:1,Amount:2,ProductionDate:"10-10-2020",StockId:1,ProductId:3},
{ID:2,Amount:25,ProductionDate:"10-10-2022",StockId:5,ProductId:1},
{ID:3,Amount:21,ProductionDate:"10-5-2017",StockId:2,ProductId:4},
{ID:4,Amount:11,ProductionDate:"10-4-2011",StockId:1,ProductId:1},
];
  ngOnInit(): void {
  }
  NavigateToAdd(){
    return this._router.navigate(['/AddStockProduct']);
  }
  NavigateToEdit(id:number){
    return this._router.navigate(['/EditStockProduct/'+id]);
  }
  NavigateToDelete(id:number){
    console.log(id);
    this.confirmDeleteService.openConfirmDialog().afterClosed().subscribe(res=>{
      if(res==true){
        this.stockProduct.DeleteStockProduct(id).subscribe(data=>{
          console.log(data);
        },error=>{
          console.log(error);
        })
      }
    })
  }
}
