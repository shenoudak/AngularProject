import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/shared_classes_intefaces/Customer';
import { CustomerDiscount } from 'src/app/shared_classes_intefaces/customerDiscount';
import { CustomerType } from 'src/app/shared_classes_intefaces/customerType';
import { CustomerDiscountService } from '../customerService/customer-discount.service';
import { CustomerTypeService } from '../customerService/customer-type.service';
import { CustomerService } from '../customerService/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  constructor(private fb:FormBuilder,private activatedRoute:ActivatedRoute,private router:Router,private customerService:CustomerService,private customerTypeService:CustomerTypeService,private customerDiscountService:CustomerDiscountService) { }
  customerId:any;
  customerTypeObj:CustomerType={} as CustomerType;
  customerTypesList:any;
  customerDiscountList:CustomerDiscount[]=[];
  customer:Customer={} as Customer;
  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(res=>{
      this.customerTypesList=res;
    },error=>{
      console.log(error);
    })
    this.customerDiscountService.getAll().subscribe(data=>{
      this.customerDiscountList=data;
      console.log(this.customerTypesList);
    },error=>{
      console.log(error);
    });
    this.activatedRoute.paramMap.subscribe(parms=>{
      this.customerId=parms.get('id');
      console.log(this.customerId);
      this.customerService.getByID(this.customerId).subscribe(data=>{
      this.customer=data;
      console.log(this.customer);
      console.log(this.customer);
      this.registrationForm.get('Name')?.patchValue(this.customer.name);
      this.registrationForm.get('BalanceOutstand')?.patchValue(this.customer.balanceOutstand);
      this.registrationForm.get('Phone')?.patchValue(this.customer.phone);
      this.registrationForm.get('Address')?.patchValue(this.customer.address);
      this.registrationForm.get('TradeName')?.patchValue(this.customer.tradeName);
      this.registrationForm.get('TypeId')?.patchValue(this.customer.typeId);
      this.registrationForm.get('DiscountId')?.patchValue(this.customer.discountId);

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
 get DiscountId(){  
  return this.registrationForm.get('DiscountId');
 }
 registrationForm=this.fb.group(
   {
    Name:['',[Validators.required,Validators.minLength(5)]],
    BalanceOutstand:[0,[Validators.pattern('^[0-9]+$')]],
    Phone:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
    Address:['',[Validators.required]],
    TradeName:['',],
    TypeId:['',Validators.required],
    DiscountId:['',Validators.required]
   }
 );
  customerObj:Customer={} as Customer;
  SaveData(){
      this.customerObj=new Customer(this.Name?.value,this.BalanceOutstand?.value,this.Phone?.value,this.Address?.value,this.TradeName?.value,this.TypeId?.value,this.DiscountId?.value);
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
