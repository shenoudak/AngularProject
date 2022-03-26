import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-expired-product',
  templateUrl: './edit-expired-product.component.html',
  styleUrls: ['./edit-expired-product.component.scss']
})
export class EditExpiredProductComponent implements OnInit {

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
