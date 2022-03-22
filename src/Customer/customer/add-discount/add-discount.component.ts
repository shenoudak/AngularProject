import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerDiscount } from 'src/app/shared_classes_intefaces/customerDiscount';
import { CustomerDiscountService } from '../customerService/customer-discount.service';

@Component({
  selector: 'app-add-discount',
  templateUrl: './add-discount.component.html',
  styleUrls: ['./add-discount.component.scss']
})
export class AddDiscountComponent implements OnInit {

  constructor(private fb:FormBuilder,private customerDiscountService:CustomerDiscountService) { }

  ngOnInit(): void {
  }
  get DiscountValue(){  
    return this.registrationForm.get('DiscountValue');
   }
  
   get StartDate(){  
    return this.registrationForm.get('StartDate');
   }
   get EndDate(){  
    return this.registrationForm.get('EndDate');
   }
   get Notes(){  
    return this.registrationForm.get('Notes');
   }
   registrationForm=this.fb.group(
     {
      DiscountValue:[0,[Validators.required,Validators.pattern('^[0-9]+$')]],
      Notes:[''],
      StartDate:['',[Validators.required]],
      EndDate:['',[Validators.required]]
     }
   );
   customerDiscount:any;
    SaveData(){
      this.customerDiscount=new CustomerDiscount(this.DiscountValue?.value,this.StartDate?.value,this.EndDate?.value,this.Notes?.value);
      this.customerDiscountService.insert(this.customerDiscount).subscribe(data=>{
        console.log(data);
      },error=>{
        console.log(error);
      });
      
      console.log(this.customerDiscount);
}
}
