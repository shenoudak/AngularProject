import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { CustomerType } from 'src/app/shared_classes_intefaces/customerType';
import { Supplier } from 'src/app/shared_classes_intefaces/supplier';
import { CustomerTypeService } from 'src/Customer/customer/customerService/customer-type.service';
import { SupplierService } from '../services/supplier.service';


@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss']
})
export class AddSupplierComponent implements OnInit {

  constructor(private fb:FormBuilder,private supplierService:SupplierService,private customerTypeService:CustomerTypeService,private router:Router) { }
  customerTypesList:CustomerType[]=[];
  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(data=>{
      this.customerTypesList=data;
      console.log(this.customerTypesList);
    },error=>{
      console.log(error);
    })
    }
  get Name(){  
    return this.registrationForm.get('Name');
   }
  
   get BalanceDebit(){  
    return this.registrationForm.get('BalanceDebit');
   }
   get Phone(){  
    return this.registrationForm.get('Phone');
   }
   get Address(){  
    return this.registrationForm.get('Address');
   }
   get TypeId(){  
    return this.registrationForm.get('TypeId');
   }
   registrationForm=this.fb.group(
     {
      Name:['',[Validators.required,Validators.minLength(5)]],
      BalanceDebit:[0,[Validators.pattern('^[0-9]+$')]],
      Phone:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      Address:['',[Validators.required]],
      TypeId:['',Validators.required],
     }
   );
   supplier:Supplier={}as Supplier;
    SaveData(){
      //parseInt(this.TypeId?.value);
      this.supplier=new Supplier(this.Name?.value,this.BalanceDebit?.value,this.Phone?.value,this.Address?.value,this.TypeId?.value);

      this.supplierService.insert(this.supplier).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/home/stock/addSupplier']);
      },error=>{
        console.log(error);
      });
      
      console.log(this.supplier);
}

}
