import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerDiscount } from 'src/app/shared_classes_intefaces/customerDiscount';
import { CustomerDiscountService } from '../customerService/customer-discount.service';

@Component({
  selector: 'app-edit-discount',
  templateUrl: './edit-discount.component.html',
  styleUrls: ['./edit-discount.component.scss']
})
export class EditDiscountComponent implements OnInit {

  constructor(private fb:FormBuilder,private customerDiscountService:CustomerDiscountService,private activatedRoute:ActivatedRoute) { }
  customerDiscountID:any;
  CustomerDiscount:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parms=>{
      this.customerDiscountID=parms.get('id');
      console.log(this.customerDiscountID);
       // this.CustomerDiscountService.getByID(this.customerDiscountID).subscribe(data=>{
    //   this.CustomerDiscount=data;
    // })
  });
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
   editData(){
    this.customerDiscount=new CustomerDiscount(this.DiscountValue?.value,this.StartDate?.value,this.EndDate?.value,this.Notes?.value);
    this.customerDiscountService.update(this.customerDiscountID,this.customerDiscount).subscribe(res=>{
      console.log(res);
    },error=>{console.log(error)});
   }

}
