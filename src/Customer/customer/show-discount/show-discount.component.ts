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
  displayedColumns: string[] = ['title','unitCount','discountValue','startDate','endDate','actions'];
  dataSource:any=[];
  customerDiscountkList:any[]=[]
  ngOnInit(): void {
    this.customerDiscountService.getAll().subscribe(data=>{
      this.dataSource=data;
      console.log(this.dataSource);
    })
  }
  navigateToAddDiscount()
  {
    this.router.navigate(['/home/customer/addDiscount']);
  }
  NavigationToEditDiscount(id:number){
    this.router.navigate(['/home/customer/editDiscount',{id:id}]);
    console.log(id);
  }
  deleteDiscount(id:number){
    this.dialogService.openConfirmDialog().afterClosed().subscribe(res=>{
      if(res==true){
        this.customerDiscountService.removeD(id).subscribe(res=>{
          console.log('delete successfully');
          this.customerDiscountService.getAll().subscribe(data=>{
            this.dataSource=data;
          },error=>{
            console.log(error);
          })
        },error=>{
          console.log(error);
        });
      }
    });
  }
}
