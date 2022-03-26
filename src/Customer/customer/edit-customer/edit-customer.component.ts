import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/shared_classes_intefaces/Customer';
import { CustomerType } from 'src/app/shared_classes_intefaces/customerType';
import { CustomerTypeService } from '../customerService/customer-type.service';
import { CustomerService } from '../customerService/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  constructor(private fb:FormBuilder,private activatedRoute:ActivatedRoute,private router:Router,private customerService:CustomerService,private customerTypeService:CustomerTypeService) { }
  customerId:any;
  customerTypeObj:CustomerType={} as CustomerType;
  customerTypesList:any;
  customer:Customer={} as Customer;
  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(res=>{
      this.customerTypesList=res;
    },error=>{
      console.log(error);
    })
    this.activatedRoute.paramMap.subscribe(parms=>{
      this.customerId=parms.get('id');
      console.log(this.customerId);
      this.customerService.getByID(this.customerId).subscribe(data=>{
      this.customer=data;
      this.customerTypeService.getByID(this.customer.typeId).subscribe(data=>{
        this.customerTypeObj=data;
        console.log(this.customerTypeObj.typeName);
      })
      this.registrationForm.get('Name')?.patchValue(this.customer.name);
      this.registrationForm.get('BalanceOutstand')?.patchValue(this.customer.balanceOutstand);
      this.registrationForm.get('Phone')?.patchValue(this.customer.phone);
      this.registrationForm.get('Address')?.patchValue(this.customer.address);
      this.registrationForm.get('TradeName')?.patchValue(this.customer.tradeName);
      this.registrationForm.get('TypeId')?.patchValue(this.customerTypeObj.id);

     },error=>{console.log(error)})
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
      TypeId:['',],
     }
   );
  customerObj:Customer={} as Customer;
    EditData(){
      //console.log(this.registrationForm.get('TypeId')?.patchValue(this.customerTypeObj.id))
      this.customerObj=new Customer(this.Name?.value,this.BalanceOutstand?.value,this.Phone?.value,this.Address?.value,this.TradeName?.value,this.TypeId?.value);
      this.customerObj.id=this.customerId;
      this.customerService.update(this.customerId,this.customerObj).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/home/customer'])
      },error=>{
        console.log(error);
      });
      
      console.log(this.customer);
}

}
