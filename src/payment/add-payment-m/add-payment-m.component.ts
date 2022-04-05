import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentM } from 'src/app/shared_classes_intefaces/paymentM';
import { PaymentMService } from '../services/payment-m.service';

@Component({
  selector: 'app-add-payment-m',
  templateUrl: './add-payment-m.component.html',
  styleUrls: ['./add-payment-m.component.scss']
})
export class AddPaymentMComponent implements OnInit {

  constructor(private fb:FormBuilder,private paymentMService:PaymentMService,private router:Router) { }
  ngOnInit(): void {
 }
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
     this.paymentMService.insert(this.paymentM).subscribe(data=>{
       console.log(data);
       this.router.navigate(['home/payment/show']);
       
     },error=>{
       console.log(error);
     });
     
     console.log(this.paymentM);
   }


}
