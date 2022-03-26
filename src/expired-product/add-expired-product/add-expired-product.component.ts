import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-expired-product',
  templateUrl: './add-expired-product.component.html',
  styleUrls: ['./add-expired-product.component.scss']
})
export class AddExpiredProductComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  expiredProduct=this.fb.group({
    ID:[''],
    Amount:['',Validators.required],
    DateAdded:[,Validators.required],
    Notes:[''],
    Product:['',Validators.required]
  })

  ngOnInit(): void {
  }

}
