import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-stock-product',
  templateUrl: './edit-stock-product.component.html',
  styleUrls: ['./edit-stock-product.component.scss']
})
export class EditStockProductComponent implements OnInit {

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
