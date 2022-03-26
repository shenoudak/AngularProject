import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/shared_classes_intefaces/Customer';
import { CustomerType } from 'src/app/shared_classes_intefaces/customerType';
import { CustomerTypeService } from '../customerService/customer-type.service';
import { CustomerService } from '../customerService/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  constructor(private fb:FormBuilder,private customerService:CustomerService,private customerTypeService:CustomerTypeService,private router:Router) { }
  customerTypesList:CustomerType[]=[];
  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(data=>{
      this.customerTypesList=data;
      console.log(this.customerTypesList);
    },error=>{
      console.log(error);
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
   get TypeId(){  
    return this.registrationForm.get('TypeId');
   }
   registrationForm=this.fb.group(
     {
      Name:['',[Validators.required]],
      BalanceOutstand:[0,[Validators.pattern('^[0-9]+$')]],
      Phone:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      Address:['',],
      TradeName:['',],
      TypeId:[''],
     }
   );
   customer:any;
    SaveData(){
      //parseInt(this.TypeId?.value);
      this.customer=new Customer(this.Name?.value,this.BalanceOutstand?.value,this.Phone?.value,this.Address?.value,this.TradeName?.value,this.TypeId?.value);

      this.customerService.insert(this.customer).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/home/customer']);
      },error=>{
        console.log(error);
      });
      
      console.log(this.customer);
}

}
