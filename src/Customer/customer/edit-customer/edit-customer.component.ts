import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/shared_classes_intefaces/Customer';
import { CustomerService } from '../customerService/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  constructor(private fb:FormBuilder,private activatedRoute:ActivatedRoute,private customerService:CustomerService) { }
  customerId:any;
  customer:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parms=>{
      this.customerId=parms.get('id');
      console.log(this.customerId);
       // this.customerService.getByID(this.customerId).subscribe(data=>{
    //   this.customer=data;
    // })
    })
}

  get Name(){  
    return this.registrationForm.get('Name');
   }
  
   get BalanceOutstand(){  
    return this.registrationForm.get('BalanceOutstand');
   }
   get Phone(){  
    return this.registrationForm.get('Phone');
   }
   get Address(){  
    return this.registrationForm.get('Address');
   }
   get TradeName(){  
    return this.registrationForm.get('TradeName');
   }
   registrationForm=this.fb.group(
     {
      Name:['',[Validators.required]],
      BalanceOutstand:[0,[Validators.pattern('^[0-9]+$')]],
      Phone:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      Address:['',],
      TradeName:['',]
     }
   );
  // customerObj:any;
    EditData(){
      this.customer=new Customer(this.Name?.value,this.BalanceOutstand?.value,this.Phone?.value,this.Address?.value,this.TradeName?.value);
      this.customerService.update(this.customerId,this.customer).subscribe(data=>{
        console.log(data);
      },error=>{
        console.log(error);
      });
      
      console.log(this.customer);
}

}
