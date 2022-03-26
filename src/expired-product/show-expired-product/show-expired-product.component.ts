import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
import { ExpiredProductService } from '../expired-product.service';

@Component({
  selector: 'app-show-expired-product',
  templateUrl: './show-expired-product.component.html',
  styleUrls: ['./show-expired-product.component.scss']
})
export class ShowExpiredProductComponent implements OnInit {

  constructor(private router:Router,private confirmDeleteService:ConfirmDeleteService,private ExpiredProduct:ExpiredProductService) { }
expiredProduct=[
  {ID:1,Amount:4,DateAdded:"10-10-2020",Notes:"No",Product:"Mango"},
  {ID:2,Amount:3,DateAdded:"10-7-2020",Notes:"Yes",Product:"Orange"},
  {ID:3,Amount:3,DateAdded:"10-4-2020",Notes:"No",Product:"Banana"},
  {ID:4,Amount:1,DateAdded:"10-3-2020",Notes:"No",Product:"Mango"},
]
NavigateToAdd(){
  this.router.navigate(['/AddExpiredProduct'])

}
NavigateToEdit(id:any){
  this.router.navigate(['/EditExpiredProduct/'+id]);

}
NavigateToDelete(id:any){
  console.log(id);
  this.confirmDeleteService.openConfirmDialog().afterClosed().subscribe(res=>{
    if(res==true){
      this.ExpiredProduct.DeleteExiredProduct(id).subscribe(data=>{
        console.log(data);
      },error=>{
        console.log(error);
      })
    }
  })

}

  ngOnInit(): void {
  }

}
