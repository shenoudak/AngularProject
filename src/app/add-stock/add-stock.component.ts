import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService } from 'src/stock/stock/stock.service';
import {  Stock } from '../shared_classes_intefaces/stock';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent implements OnInit {

  constructor(private fb:FormBuilder,private stockService:StockService,private router:Router) { }

  ngOnInit(): void {
  }
   get Name(){  
    return this.registrationForm.get('Name');
   }
   get Address(){  
    return this.registrationForm.get('Address');
   }
   registrationForm=this.fb.group(
     {
      Name:['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z ]*')]],
      Address:['',[Validators.required,Validators.minLength(5)]],
       
     }
   );
   
    

    stock:any;
    SaveData(){
      this.stock=new Stock(this.Name?.value,this.Address?.value);
      this.stockService.insert(this.stock).subscribe(data=>{
        console.log('data');
        this.router.navigate(['/home/stock']);
      },error=>{
        console.log(error);
      });
      
      console.log(this.stock);
    }


}

