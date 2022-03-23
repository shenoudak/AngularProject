import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
import { CustomerDiscountService } from '../customerService/customer-discount.service';

@Component({
  selector: 'app-show-discount',
  templateUrl: './show-discount.component.html',
  styleUrls: ['./show-discount.component.scss']
})
export class ShowDiscountComponent implements OnInit {

  constructor(private router:Router,private dialogService:ConfirmDeleteService,private customerDiscountService:CustomerDiscountService) { }

  ngOnInit(): void {
  }
  navigateToAddDiscount()
  {
    this.router.navigate(['/home/customer/addDiscount']);
  }
  NavigationToEditDiscount(id:number){
    this.router.navigate(['/home/customer/editDiscount',{id:id}]);
    console.log(id);
  }
  customerDiscountkList:any[]=[{ID:1,DiscountValue:"10%",Notes:"All Client",StartDate:"2020-10-1",EndDate:"2020-12-1"},{ID:1,DiscountValue:"15%",Notes:"AllClient",StartDate:"2020-12-1",EndDate:"2021-1-1"},{ID:1,DiscountValue:"20%",Notes:"All cLient",StartDate:"2021-02-4",EndDate:"2021-3-2"}];
  deleteDiscount(id:number){
    this.dialogService.openConfirmDialog().afterClosed().subscribe(res=>{
      if(res==true){
        this.customerDiscountService.removeD(id).subscribe(res=>{
          console.log('delete successfully');
        },error=>{
          console.log(error);
        });
      }
    });
  }
}
