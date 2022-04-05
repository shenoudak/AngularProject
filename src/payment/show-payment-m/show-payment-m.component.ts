import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
import { PaymentM } from 'src/app/shared_classes_intefaces/paymentM';
import { PaymentMService } from '../services/payment-m.service';

@Component({
  selector: 'app-show-payment-m',
  templateUrl: './show-payment-m.component.html',
  styleUrls: ['./show-payment-m.component.scss']
})
export class ShowPaymentMComponent implements OnInit {

  constructor(private router:Router,private dialogService:ConfirmDeleteService,private paymentMService:PaymentMService ) { }
  displayedColumns: string[] = ['name','type','balance','actions'];
  dataSource:any=[];
  paymentMList: PaymentM []=[];
  ngOnInit(): void 
  {
    this.paymentMService.getAll().subscribe(data=>{
      this.paymentMList=data;
      this.dataSource=this.paymentMList;
      console.log(this.dataSource);
    },error=>{
      console.log(error);
    })
  }
 
  navigateToAddPaymentM(){
    this.router.navigate(['/home/payment/add']);
  }
  NavigationToEditPaymentM(id:any){
    this.router.navigate(['/home/payment/edit',{id:id}]);
    console.log(id);
  }
  deletePaymentM(id:any){
    console.log(id);
    this.dialogService.openConfirmDialog().afterClosed().subscribe(res=>{
      console.log(id);
      if(res==true){
        this.paymentMService.removeD(id).subscribe(res=>{
          this.paymentMService.getAll().subscribe(data=>{
            this.paymentMList=data;
            this.dataSource=this.paymentMList;
          })
          console.log('delete successfully');
        },error=>{
          console.log(error);
        });
      }
    });
  }



}
