import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared_classes_intefaces/peoduct';
import { ProductService } from '../productService/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  constructor(private fb:FormBuilder,private productService:ProductService,private activatedRoute:ActivatedRoute) { }
  productList:Product[]=[];//Category
  productId:any;
  categoryList=['Cat1','Cat2','Cat3'];
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parms=>{
      this.productId=parms.get('id');
      console.log(this.productId);
    })
       // this.productService.getByID(this.productId).subscribe(data=>{
    //   this.product=data;
    // })
    // this.productService.getByID(1).subscribe(data=>{
    //   this.product=data;
    // },error=>{
    //   console.log(error);
    // })
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
   get CatName(){  
    return this.registrationForm.get('CatName');
   }
   registrationForm=this.fb.group(
     {
      Name:['',[Validators.required]],
      Description:['',],
      //MiniAmount:[0,[Validators.pattern('^[0-9]+$')]],
      MiniAmount:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      SellingPrice:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      PurchasingPrice:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      ExpiryPeriod:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      Barcode:['',],
      CatName:['',Validators.required],
     }
   );
   product:any;
    SaveData(){
      this.product=new Product(1,this.Name?.value,this.Description?.value,this.Barcode?.value,this.MiniAmount?.value,this.ExpiryPeriod?.value,this.SellingPrice?.value,this.PurchasingPrice?.value,1);

      this.productService.update(this.product,this.productId).subscribe(data=>{
        console.log(data);
      },error=>{
        console.log(error);
      });
      
      console.log(this.product);
}

}
