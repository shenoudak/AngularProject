import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-payment-method',
  templateUrl: './edit-payment-method.component.html',
  styleUrls: ['./edit-payment-method.component.scss']
})
export class EditPaymentMethodComponent implements OnInit {

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
