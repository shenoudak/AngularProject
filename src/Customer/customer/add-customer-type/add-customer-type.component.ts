import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerType } from 'src/app/shared_classes_intefaces/customerType';
import { CustomerTypeService } from '../customerService/customer-type.service';

@Component({
  selector: 'app-add-customer-type',
  templateUrl: './add-customer-type.component.html',
  styleUrls: ['./add-customer-type.component.scss']
})
export class AddCustomerTypeComponent implements OnInit {

  constructor(private fb:FormBuilder,private customerTypeService:CustomerTypeService,private router:Router) { }
   ngOnInit(): void {
  }
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
   customerType:any;
    SaveData(){
      this.customerType=new CustomerType(this.TypeName?.value,this.Description?.value);

      this.customerTypeService.insert(this.customerType).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/home/customer/customerType']);
        
      },error=>{
        console.log(error);
      });
      
      console.log(this.customerType);
    }
}
