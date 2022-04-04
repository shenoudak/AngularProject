import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { Product } from 'src/app/shared_classes_intefaces/peoduct';
import { CategoryService } from '../productService/category.service';
import { ProductService } from '../productService/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private productService:ProductService,private categoryService:CategoryService) { }
  categoryList:any[]=[];//Category
  ngOnInit(): void {
   this.categoryService.getAll().subscribe(data=>{
      this.categoryList=data;
    },error=>{
      console.log(error);
    })
  }
  get Name(){  
    return this.registrationForm.get('Name');
   }
  
   get Description(){  
    return this.registrationForm.get('Description');
   }
   get MiniAmount(){  
    return this.registrationForm.get('MiniAmount');
   }
   get Barcode(){  
    return this.registrationForm.get('Barcode');
   }
   get SellingPrice(){  
    return this.registrationForm.get('SellingPrice');
   }
   get PurchasingPrice(){  
    return this.registrationForm.get('PurchasingPrice');
   }
   get ExpiryPeriod(){  
    return this.registrationForm.get('ExpiryPeriod');
   }
   get CatId(){  
    return this.registrationForm.get('CatId');
   }
   registrationForm=this.fb.group(
     {
      Name:['',[Validators.required,Validators.minLength(5)]],
      Description:['',],
      MiniAmount:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      SellingPrice:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      PurchasingPrice:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      ExpiryPeriod:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      Barcode:['',],
      CatId:['',Validators.required],
     }
   );
   product:Product={}as Product;
    SaveData(){
      this.product=new Product(this.Name?.value,this.Description?.value,this.Barcode?.value,this.MiniAmount?.value,this.SellingPrice?.value,this.PurchasingPrice?.value,this.ExpiryPeriod?.value,this.CatId?.value);
      this.productService.insert(this.product).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/home/product'])
      },error=>{
        console.log(error);
      });
      
      console.log(this.product);
}


}
