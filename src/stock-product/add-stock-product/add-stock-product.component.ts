import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-stock-product',
  templateUrl: './add-stock-product.component.html',
  styleUrls: ['./add-stock-product.component.scss']
})
export class AddStockProductComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  StockProduct=this.fb.group({
    ID:[],
    Amount:[,Validators.required],
    ProductId:['',Validators.required],
    StockId:['',Validators.required],
    ProductionDate:['',Validators.required]
  })

  ngOnInit(): void {
  }

}
