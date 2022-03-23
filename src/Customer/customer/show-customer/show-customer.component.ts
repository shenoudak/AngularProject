import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
import { CustomerService } from '../customerService/customer.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.scss']
})
export class ShowCustomerComponent implements OnInit {

  constructor(private router:Router,private dialogService:ConfirmDeleteService,private customerService:CustomerService ) { }
  customerList:any[]=
  [
    {Name:'shenouda',BalanceOutstand:"10%",Phone:"01289654123",Address:"Assiut",TradeName:"Romany"},
    {Name:'Romany',BalanceOutstand:"10%",Phone:"01289654123",Address:"Assiut",TradeName:"Romany"},
    {Name:'Atef',BalanceOutstand:"10%",Phone:"01289654123",Address:"Assiut",TradeName:"Romany"},];
  ngOnInit(): void {
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
        },error=>{
          console.log(error);
        });
      }
    });
  }

 
}
