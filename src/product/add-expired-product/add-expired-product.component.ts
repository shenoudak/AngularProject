import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpiredProduct } from 'src/app/shared_classes_intefaces/expiredProduct';
import { ExpiredProductService } from '../productService/expired-product.service';
import { ProductService } from '../productService/product.service';

@Component({
  selector: 'app-add-expired-product',
  templateUrl: './add-expired-product.component.html',
  styleUrls: ['./add-expired-product.component.scss']
})
export class AddExpiredProductComponent implements OnInit {
  dateToDay:any;
  maxDate:any;
  constructor(private fb:FormBuilder,private datePipe:DatePipe,private router:Router,private expiredProductService:ExpiredProductService,private productService:ProductService)
   { 
    const currentYear = new Date().getFullYear();
    const today = new Date();
    this.dateToDay=today;
    const month = today.getMonth();
    const year = today.getFullYear();
    const day = today.getDay();
    //this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(year, month, day + 3);

   }
  productList:any[]=[];
  myDateToDay:any;
 
  ngOnInit(): void {
    this.myDateToDay = new Date();
   this.productService.getAll().subscribe(data=>{
      this.productList=data;
    },error=>{
      console.log(error);
    })
  }
 
  
  get Amount(){  
    return this.registrationForm.get('Amount');
   }
   get DateAdded(){  
    return this.registrationForm.get('DateAdded');
   }
   get Notes(){  
    return this.registrationForm.get('Notes');
   }
   get ProductionDate(){  
    return this.registrationForm.get('ProductionDate');
   }
   get ProductId(){  
    return this.registrationForm.get('ProductId');
   }
   registrationForm=this.fb.group(
     {
      Amount:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      DateAdded:['',],
      Notes:['',[Validators.required]],
      ProductId:['',Validators.required],
      ProductionDate:['',[Validators.required]],
     }
   );
   expiredproduct:ExpiredProduct={}as ExpiredProduct;
   changeDataFormat:any;
   changeDataFormatPD:any;
    SaveData(){
       this.changeDataFormat = this.datePipe.transform(this.myDateToDay, 'yyyy-MM-dd')
     this.registrationForm.get('DateAdded')?.patchValue(this.changeDataFormat);
     this.changeDataFormatPD = this.datePipe.transform(this.ProductionDate?.value, 'yyyy-MM-dd')
     this.registrationForm.get('ProductionDate')?.patchValue(this.changeDataFormatPD);

      this.expiredproduct=new ExpiredProduct(this.Amount?.value,this.DateAdded?.value,this.Notes?.value,this.ProductId?.value,this.ProductionDate?.value);
      this.expiredProductService.insert(this.expiredproduct).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/home/product'])
      },error=>{
        console.log(error);
      });
      
      console.log(this.expiredproduct);
}



}
