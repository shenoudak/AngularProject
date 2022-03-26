import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
import { PaymentMethodService } from '../payment-method.service';

@Component({
  selector: 'app-show-payment-method',
  templateUrl: './show-payment-method.component.html',
  styleUrls: ['./show-payment-method.component.scss']
})
export class ShowPaymentMethodComponent implements OnInit {

  constructor(private router:Router,private confirmDeleteService:ConfirmDeleteService,private payServices:PaymentMethodService) { }
  paymentMethod=[
    {ID:1,Balance:2000,Name:"Cairo",Type:"visa"},
    {ID:2,Balance:4000,Name:"Alex",Type:"cash"},
    {ID:3,Balance:3000,Name:"Alahli",Type:"cash"},
    {ID:4,Balance:5000,Name:"misr",Type:"visa"},
  ];
  NavigateToAdd(){
this.router.navigate(['/addPayment']);
  }
  NavigateToEdit(id:any){
    this.router.navigate(['/editPayment/'+id]);
      }
      NavigateToDelete(id:any){
        // this.router.navigate(['/deletePayment/'+id]);
        this.confirmDeleteService.openConfirmDialog().afterClosed().subscribe(res=>{
          if(res==true){
            this.payServices.deletePaymentMethod(id).subscribe(data=>{
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
