import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentM } from 'src/app/shared_classes_intefaces/paymentM';
import { PaymentMService } from '../services/payment-m.service';

@Component({
  selector: 'app-edit-payment-m',
  templateUrl: './edit-payment-m.component.html',
  styleUrls: ['./edit-payment-m.component.scss']
})
export class EditPaymentMComponent implements OnInit {
  constructor(private fb:FormBuilder,private activatedRoute:ActivatedRoute,private paymentMService:PaymentMService,private router:Router) { }
  paymentMId:any;
  payment:PaymentM={}as PaymentM;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parms=>{
      this.paymentMId=parms.get('id');
       console.log(this.paymentMId);
        this.paymentMService.getByID(this.paymentMId).subscribe(data=>{
       this.payment=data;
       console.log(this.payment);
       this.registrationForm.get('Name')?.patchValue(this.payment.name);
       this.registrationForm.get('Type')?.patchValue(this.payment.type);
       this.registrationForm.get('Balance')?.patchValue(this.payment.balance);
     })
 })}
 get Name(){  
   return this.registrationForm.get('Name');
  }
  get Type(){  
   return this.registrationForm.get('Type');
  } 
  get Balance(){  
    return this.registrationForm.get('Balance');
   } 
  registrationForm=this.fb.group(
    {
      Name:['',[Validators.required,Validators.minLength(5)]],
      Balance:['',[Validators.required]],
      Type:['',[Validators.required]],
     Description:['',],
    }
  );
  paymentM:PaymentM={} as PaymentM;
   SaveData(){
     this.paymentM=new PaymentM(this.Name?.value,this.Type?.value,this.Balance?.value);
     this.paymentM.id=this.paymentMId;
     this.paymentMService.update(this.paymentMId,this.paymentM).subscribe(data=>{
       console.log(data);
       this.router.navigate(['home/payment/show']);
       
     },error=>{
       console.log(error);
     });
     
     console.log(this.paymentM);
   }


}
