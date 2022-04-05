import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerDiscount } from 'src/app/shared_classes_intefaces/customerDiscount';
import { CustomerDiscountService } from '../customerService/customer-discount.service';

@Component({
  selector: 'app-add-discount',
  templateUrl: './add-discount.component.html',
  styleUrls: ['./add-discount.component.scss']
})
export class AddDiscountComponent implements OnInit {
  dateToDay:any;
  maxDate:any;
  constructor(private fb:FormBuilder,private datePipe:DatePipe,private router:Router,private customerDiscountService:CustomerDiscountService) 
  { 
    const currentYear = new Date().getFullYear();
    const today = new Date();
    this.dateToDay=today;
    const month = today.getMonth();
    const year = today.getFullYear();
    const day = today.getDay();
    //this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(year, month, day + 3);

  }
  myDateToDay:any;
  ngOnInit(): void {
    this.myDateToDay = new Date();
    
  }
  get DiscountValue(){  
    return this.registrationForm.get('DiscountValue');
   }
   get Title(){  
    return this.registrationForm.get('Title');
   }
   get UnitCount(){  
    return this.registrationForm.get('UnitCount');
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
      Notes:['',Validators.minLength(10)],
      StartDate:['',[Validators.required]],
      EndDate:['',[Validators.required]],
      Title:['',[Validators.required,Validators.minLength(10)]],
      UnitCount:['',[Validators.required]]
     }
   );
   customerDiscount:any;
   changeDataFormat:any;
  EndDateFormat:any;
   
    SaveData(){
      this.changeDataFormat = this.datePipe.transform(this.myDateToDay, 'yyyy-MM-dd')
      this.EndDateFormat = this.datePipe.transform(this.myDateToDay, 'yyyy-MM-dd')

      this.customerDiscount=new CustomerDiscount(this.DiscountValue?.value,this.Notes?.value,this.changeDataFormat,this.EndDateFormat,this.Title?.value,this.UnitCount?.value);
      this.customerDiscountService.insert(this.customerDiscount).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/home/customer/showDiscount']);
      },error=>{
        console.log(error);
      });
      
      console.log(this.customerDiscount);
}
}
