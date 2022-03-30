import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
import { CustomerType } from 'src/app/shared_classes_intefaces/customerType';
import { CustomerTypeService } from '../customerService/customer-type.service';
import { CustomerService } from '../customerService/customer.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.scss']
})
export class ShowCustomerComponent implements OnInit {
  customerType:CustomerType={} as CustomerType;
  displayedColumns: string[] = ['name', 'balanceOutstand','phone','address','tradeName','customerType',"actions"];
  dataSource:any=[];
  constructor(private router:Router,private customerTypeService:CustomerTypeService,private dialogService:ConfirmDeleteService,private customerService:CustomerService ) { }
  customerList:any[]=[];
  customerTypeName:any[]=[];
  ngOnInit(): void {
    this.customerService.getAll().subscribe(data=>{
      this.dataSource=data;
      for(let element of this.dataSource){
         this.customerTypeService.getByID(element.typeId).subscribe(res=>{
         this.customerType=res;
         this.customerTypeName.push(this.customerType.typeName);
       })
      }
      console.log(this.customerList);
    },error=>{
      console.log(error);
    })
  }
  navigateToAddCustomer(){
    this.router.navigate(['/home/customer/addCustomer']);
  }
  NavigationToEditCustomer(id:number){
    this.router.navigate(['/home/customer/editCustomer',{id:id}]);
    console.log(id);
  }
  deleteCustomer(id:number){
    this.dialogService.openConfirmDialog().afterClosed().subscribe(res=>{
      if(res==true){
        this.customerService.removeD(id).subscribe(res=>{
          console.log('delete successfully');
          this.customerService.getAll().subscribe(data=>{
            this.dataSource=data;
          },error=>{console.log(error)});
        },error=>{
          console.log(error);
        });
      }
    });
  }

 
}
