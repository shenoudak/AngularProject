import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
import { CustomerType } from 'src/app/shared_classes_intefaces/customerType';
import { CustomerTypeService } from '../customerService/customer-type.service';

@Component({
  selector: 'app-show-customer-type',
  templateUrl: './show-customer-type.component.html',
  styleUrls: ['./show-customer-type.component.scss']
})
export class ShowCustomerTypeComponent implements OnInit {

  constructor(private router:Router,private dialogService:ConfirmDeleteService,private customerTypeService:CustomerTypeService ) { }
  customerTypeList:CustomerType[]=[];
  ngOnInit(): void 
  {
    this.customerTypeService.getAll().subscribe(data=>{
      this.customerTypeList=data;
      console.log(this.customerTypeList);
    },error=>{
      console.log(error);
    })
  }
 
  navigateToAddCustomer(){
    this.router.navigate(['/home/customer/addCustomerType']);
  }
  NavigationToEditCustomerType(id:any){
    this.router.navigate(['/home/customer/editCustomerType',{id:id}]);
    console.log(id);
  }
  deleteCustomerType(id:any){
    console.log(id);
    this.dialogService.openConfirmDialog().afterClosed().subscribe(res=>{
      if(res==true){
        this.customerTypeService.removeD(id).subscribe(res=>{
          this.customerTypeService.getAll().subscribe(data=>{
            this.customerTypeList=data;
          })
          console.log('delete successfully');
        },error=>{
          console.log(error);
        });
      }
    });
  }
}
