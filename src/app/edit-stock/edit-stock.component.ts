import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from 'src/stock/stock/stock.service';
import { Stock } from '../shared_classes_intefaces/stock';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.scss']
})
export class EditStockComponent implements OnInit {

  constructor(private fb:FormBuilder,private stockService:StockService,private router:Router,private activatedRoute:ActivatedRoute)
   {

   }
  stock:Stock={}as Stock;
  asd:string="";
  public stockId:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parms=>{
      this.stockId=parms.get('id');
      console.log(this.stockId);
    })
     this.stockService.getByID(this.stockId).subscribe(data=>{
       this.stock=data;
       this.stock.name=data.name;
       this.stock.address=data.address;
       console.log(this.stock);
       console.log( this.stock.id);
       this.registrationForm.get('Name')?.patchValue(this.stock.name);
       this.registrationForm.get('Address')?.patchValue(this.stock.address);
     })
    
     
  }
  
   get Name(){  
    return this.registrationForm.get('Name');

   }
   get Address(){  
    return this.registrationForm.get('Address');
   }
  // asd:string="asd";
   registrationForm=this.fb.group(
     {
      Name:['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z ]*')]],
      Address:['',[Validators.required,Validators.minLength(5)]],
       
     }
    
   );
   stockObj:any;
   editData(){
    console.log(this.stock);
  
    this.stockObj=new Stock(this.Name?.value,this.Address?.value);
    this.stockObj.id=this.stockId;
    this.stockService.update(this.stockId,this.stockObj).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/home/stock']);
    },error=>{console.log(error)});
   }
}
