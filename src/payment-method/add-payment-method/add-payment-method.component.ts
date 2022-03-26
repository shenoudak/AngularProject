import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-payment-method',
  templateUrl: './add-payment-method.component.html',
  styleUrls: ['./add-payment-method.component.scss']
})
export class AddPaymentMethodComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  paymentMethod=this.fb.group({
    ID:[''],
    Name:['',Validators.required],
    Balance:['',Validators.required],
    Type:['',Validators.required]

  });

  ngOnInit(): void {
  }

}
