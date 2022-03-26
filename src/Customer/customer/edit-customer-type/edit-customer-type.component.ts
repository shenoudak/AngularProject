import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerType } from 'src/app/shared_classes_intefaces/customerType';
import { CustomerTypeService } from '../customerService/customer-type.service';

@Component({
  selector: 'app-edit-customer-type',
  templateUrl: './edit-customer-type.component.html',
  styleUrls: ['./edit-customer-type.component.scss']
})
export class EditCustomerTypeComponent implements OnInit {

  constructor(private fb:FormBuilder,private customerTypeService:CustomerTypeService,private activatedRoute:ActivatedRoute,private router:Router) { }
  customerTypeId:any;
  customerType:CustomerType={}as CustomerType;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parms=>{
      this.customerTypeId=parms.get('id');
       console.log(this.customerTypeId);
        this.customerTypeService.getByID(this.customerTypeId).subscribe(data=>{
       this.customerType=data;
       console.log(this.customerType);
       this.registrationForm.get('TypeName')?.patchValue(this.customerType.typeName);
       this.registrationForm.get('Description')?.patchValue(this.customerType.description);
     })
 })}
 
 get TypeName(){  
   return this.registrationForm.get('TypeName');
  }
  get Description(){  
   return this.registrationForm.get('Description');
  } 
  registrationForm=this.fb.group(
    {
     TypeName:['',[Validators.required,Validators.minLength(5)]],
     Description:['',],
    }
  );
  editData(){
    
     this.customerType=new CustomerType(this.TypeName?.value,this.Description?.value);
     this.customerType.id=this.customerTypeId;
     this.customerTypeService.update(this.customerTypeId,this.customerType).subscribe(data=>{
       console.log(data);
      this.router.navigate(['/home/customer/customerType']);
     },error=>{
       console.log(error);
     });
     
     console.log(this.customerType);
   }


}
