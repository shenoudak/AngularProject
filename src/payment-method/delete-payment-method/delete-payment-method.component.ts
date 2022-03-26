import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-payment-method',
  templateUrl: './delete-payment-method.component.html',
  styleUrls: ['./delete-payment-method.component.scss']
})
export class DeletePaymentMethodComponent implements OnInit {

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
