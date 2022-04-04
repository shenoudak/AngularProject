import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared_classes_intefaces/peoduct';
import { CategoryService } from '../productService/category.service';
import { ProductService } from '../productService/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private productService:ProductService,private activatedRoute:ActivatedRoute,private categoryService:CategoryService) { }
  product:Product={} as Product;
  productList:Product[]=[];//Category
  categoryList:any;
  productId:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parms=>{
      this.productId=parms.get('id');
      console.log(this.productId);
    });
     this.productService.getByID(this.productId).subscribe(data=>{
       this.product=data;
       this.registrationForm.get('Name')?.patchValue(this.product.name);
       this.registrationForm.get('Description')?.patchValue(this.product.description);
       this.registrationForm.get('Description')?.patchValue(this.product.miniAmount);
       this.registrationForm.get('Barcode')?.patchValue(this.product.barcode);
       this.registrationForm.get('SellingPrice')?.patchValue(this.product.sellingPrice);
       this.registrationForm.get('PurchasingPrice')?.patchValue(this.product.purchasingPrice);
       this.registrationForm.get('ExpiryPeriod')?.patchValue(this.product.expiryPeriod);
       this.registrationForm.get('MiniAmount')?.patchValue(this.product.miniAmount);
       this.registrationForm.get('CatId')?.patchValue(this.product.categoryId);
       this.categoryService.getAll().subscribe(data=>{
         this.categoryList=data;
       },error=>{
         console.log(error);
       })
     },error=>{
       console.log(error);
     });
     //this.changeDataFormat = this.datePipe.transform(this.expense.date, 'yyyy-MM-dd')
 
     
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
      Name:['',[Validators.required]],
      Description:['',],
      MiniAmount:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      SellingPrice:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      PurchasingPrice:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      ExpiryPeriod:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      Barcode:['',],
      CatId:['',Validators.required],
     }
   );
   productObj:Product={} as Product;
    SaveData(){
      console.log(this.productObj);
      //this.productObj=new Product(this.Name?.value,this.Description?.value,this.Barcode?.value,this.MiniAmount?.value,this.SellingPrice?.value,this.PurchasingPrice?.value,this.ExpiryPeriod?.value,this.CatId?.value);
      this.productObj=new Product(this.Name?.value,this.Description?.value,this.Barcode?.value,this.MiniAmount?.value,this.SellingPrice?.value,this.PurchasingPrice?.value,this.ExpiryPeriod?.value,this.CatId?.value);
      this.productObj.id=this.productId;
      this.productService.update(this.productId,this.productObj).subscribe(data => {
        console.log(data);
        this.router.navigate(['/home/product']);
      }, error => {
        console.log(error);
      });
  
      console.log(this.productObj);
}

}
