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

  constructor(private datePipe: DatePipe, private fb: FormBuilder, private router: Router, private customerDiscountService: CustomerDiscountService, private activatedRoute: ActivatedRoute) {
    //this.datePipeString = datePipe.transform(Date.now(),'yyyy-MM-dd');
  }
  customerDiscountID: any;
  startDateString: any;
  endDateString: any;
  customerDiscount: CustomerDiscount = {} as CustomerDiscount;
  ngOnInit(): void {
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

      })
    });
  }
  get DiscountValue() {
    return this.registrationForm.get('DiscountValue');
  }

  get StartDate() {
    return this.registrationForm.get('StartDate');
  }
  get EndDate() {
    return this.registrationForm.get('EndDate');
  }
  get Notes() {
    return this.registrationForm.get('Notes');
  }
  get Title() {
    return this.registrationForm.get('Title');
  }
  get UnitCount() {
    return this.registrationForm.get('UnitCount');
  }
  
  registrationForm = this.fb.group(
    {
      DiscountValue: [0, [Validators.required, Validators.pattern('^[0-9]+$')]],
      Notes: [''],
      StartDate: ['', [Validators.required]],
      EndDate: ['', [Validators.required]],
      Title: ['', [Validators.required]],
      UnitCount: ['', [Validators.required]]
    }
  );
  customerDiscountObj: any;
  editData() {
    this.customerDiscountObj = new CustomerDiscount(this.DiscountValue?.value,this.Notes?.value,this.StartDate?.value, this.EndDate?.value,this.Title?.value,this.UnitCount?.value);
    console.log(this.customerDiscountID);
    this.customerDiscountObj.id = this.customerDiscountID;
    this.customerDiscountService.update(this.customerDiscountID, this.customerDiscountObj).subscribe(res => {
      console.log(res);
      this.router.navigate(['/home/customer/showDiscount']);
    }, error => { console.log(error) });
  }

}
