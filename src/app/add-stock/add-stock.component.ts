import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StockService } from 'src/stock/stock/stock.service';
import {  Stock } from '../shared_classes_intefaces/stock';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent implements OnInit {

  constructor(private fb:FormBuilder,private stockService:StockService) { }

  ngOnInit(): void {
  }
  get ID(){  
    return this.registrationForm.get('ID');
   }
   get Name(){  
    return this.registrationForm.get('Name');
   }
   get Address(){  
    return this.registrationForm.get('Address');
   }
   registrationForm=this.fb.group(
     {
      ID:[0,[Validators.required,Validators.pattern('^[0-9]+$')]],
      Name:['',[Validators.required,Validators.minLength(5)]],
      Address:['',[Validators.required,Validators.minLength(5)]],
       
     }
   );
   
    
  getDataToEdit(){
    this.registrationForm.patchValue(
      {
        ID:"1",
        Name:"shenouda karam",
        Address:"Assiut"
      }

    )
    }
    stock:any;
    SaveData(){
      this.stock=new Stock(this.ID?.value,this.Name?.value,this.Address?.value);
      this.stockService.insert(this.stock).subscribe(data=>{
        console.log('data');
      },error=>{
        console.log(error);
      });
      
      console.log(this.stock);
     // this.stockService.insert()
    }


}

