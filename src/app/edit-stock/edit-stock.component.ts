import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StockService } from 'src/stock/stock/stock.service';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.scss']
})
export class EditStockComponent implements OnInit {

  constructor(private fb:FormBuilder,private stockService:StockService,private activatedRoute:ActivatedRoute) { }
  stock:any;
  stockId:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parms=>{
      this.stockId=parms.get('id');
      console.log(this.stockId);
    })
    // this.stockService.getByID(this.stockId).subscribe(data=>{
    //   this.stock=data;
    // })
  }
  get Number(){  
    return this.registrationForm.get('Number');
   }
   get Name(){  
    return this.registrationForm.get('Name');
   }
   get Address(){  
    return this.registrationForm.get('Address');
   }
   registrationForm=this.fb.group(
     {
      Number:[0,[Validators.required,Validators.pattern('^[0-9]+$')]],
      Name:['',[Validators.required,Validators.minLength(5)]],
      Address:['',[Validators.required,Validators.minLength(5)]],
       
     }
   );
   
  editData(){

  }
}
