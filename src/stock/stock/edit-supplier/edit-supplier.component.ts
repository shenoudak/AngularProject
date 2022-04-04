import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/shared_classes_intefaces/Customer';
import { CustomerType } from 'src/app/shared_classes_intefaces/customerType';
import { Supplier } from 'src/app/shared_classes_intefaces/supplier';
import { CustomerTypeService } from 'src/Customer/customer/customerService/customer-type.service';
import { SupplierService } from '../services/supplier.service';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.scss']
})
export class EditSupplierComponent implements OnInit {

  constructor(private fb:FormBuilder,private activatedRoute:ActivatedRoute,private router:Router,private customerTypeService:CustomerTypeService,private supplierService:SupplierService) { }
  supplierId:any;
  customerTypeObj:CustomerType={} as CustomerType;
  customerTypesList:any;
  supplier:Supplier={} as Supplier;
  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(res=>{
      this.customerTypesList=res;
    },error=>{
      console.log(error);
    })
  
    this.activatedRoute.paramMap.subscribe(parms=>{
      this.supplierId=parms.get('id');
      console.log(this.supplierId);
      this.supplierService.getByID(this.supplierId).subscribe(data=>{
      this.supplier=data;
      console.log(this.supplier);
      console.log(this.supplier);
      this.registrationForm.get('Name')?.patchValue(this.supplier.name);
      this.registrationForm.get('BalanceOutstand')?.patchValue(this.supplier.balanceDebit);
      this.registrationForm.get('Phone')?.patchValue(this.supplier.phone);
      this.registrationForm.get('Address')?.patchValue(this.supplier.address);
      this.registrationForm.get('TypeId')?.patchValue(this.supplier.typeId);
    

     },error=>{console.log(error)})
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
  supplierObj:Supplier={} as Supplier;
  SaveData(){
      this.supplierObj=new Supplier(this.Name?.value,this.BalanceDebit?.value,this.Phone?.value,this.Address?.value,this.TypeId?.value);
      this.supplierObj.id=this.supplierId;
      this.supplierService.update(this.supplierId,this.supplierObj).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/home/stock/showSupplier'])
      },error=>{
        console.log(error);
      });
      
      console.log(this.supplierObj);
}


}
