import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerDiscount } from 'src/app/shared_classes_intefaces/customerDiscount';
import { CustomerDiscountService } from '../customerService/customer-discount.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-edit-discount',
  templateUrl: './edit-discount.component.html',
  styleUrls: ['./edit-discount.component.scss']
})
export class EditDiscountComponent implements OnInit {
  dateToDay:any;
  maxDate:any;
  constructor(private datePipe: DatePipe, private fb: FormBuilder, private router: Router, private customerDiscountService: CustomerDiscountService, private activatedRoute: ActivatedRoute) {
    //this.datePipeString = datePipe.transform(Date.now(),'yyyy-MM-dd');
    const currentYear = new Date().getFullYear();
    const today = new Date();
    this.dateToDay=today;
    const month = today.getMonth();
    const year = today.getFullYear();
    const day = today.getDay();
    //this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(year, month, day + 3);
  }
  customerDiscountID: any;
  startDateString: any;
  endDateString: any;
  customerDiscount: CustomerDiscount = {} as CustomerDiscount;
  myDateToDay:any;
  ngOnInit(): void {
    this.myDateToDay = new Date();
    this.activatedRoute.paramMap.subscribe(parms => {
      this.customerDiscountID = parms.get('id');
      console.log(this.customerDiscountID)
      this.customerDiscountService.getByID(this.customerDiscountID).subscribe(data => {
        this.customerDiscount = data;
        this.startDateString = this.datePipe.transform(this.customerDiscount.startDate, 'yyyy-MM-dd')
        this.endDateString = this.datePipe.transform(this.customerDiscount.startDate, 'yyyy-MM-dd')
        this.registrationForm.get("DiscountValue")?.patchValue(this.customerDiscount.discountValue);
        this.registrationForm.get("StartDate")?.patchValue(this.startDateString);
        this.registrationForm.get("EndDate")?.patchValue(this.endDateString);
        this.registrationForm.get("Notes")?.patchValue(this.customerDiscount.notes);
        this.registrationForm.get("Title")?.patchValue(this.customerDiscount.title);
        this.registrationForm.get("UnitCount")?.patchValue(this.customerDiscount.unitCount);

      })
    });
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
  customerDiscountObj: any;
  changeDataFormat:any;
  EndDateFormat:any;
  SaveData() {
    this.changeDataFormat = this.datePipe.transform(this.myDateToDay, 'yyyy-MM-dd')
    this.EndDateFormat = this.datePipe.transform(this.myDateToDay, 'yyyy-MM-dd')
    this.customerDiscountObj = new CustomerDiscount(this.DiscountValue?.value,this.Notes?.value,this.StartDate?.value, this.EndDate?.value,this.Title?.value,this.UnitCount?.value);
    console.log(this.customerDiscountID);
    this.customerDiscountObj.id = this.customerDiscountID;
    this.customerDiscountService.update(this.customerDiscountID, this.customerDiscountObj).subscribe(res => {
      console.log(res);
      this.router.navigate(['/home/customer/showDiscount']);
    }, error => { console.log(error) });
  }

}
