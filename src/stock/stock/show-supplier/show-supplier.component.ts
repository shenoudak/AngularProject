import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
import { CustomerType } from 'src/app/shared_classes_intefaces/customerType';
import { CustomerTypeService } from 'src/Customer/customer/customerService/customer-type.service';
import { SupplierService } from '../services/supplier.service';

@Component({
  selector: 'app-show-supplier',
  templateUrl: './show-supplier.component.html',
  styleUrls: ['./show-supplier.component.scss']
})
export class ShowSupplierComponent implements OnInit {

  customerType:CustomerType={} as CustomerType;
  displayedColumns: string[] = ['name','phone','address','balanceDebit','customerType',"actions"];
  dataSource:any=[];
  constructor(private router:Router,private customerTypeService:CustomerTypeService,private dialogService:ConfirmDeleteService,private supplierService:SupplierService ) { }
  supplierList:any[]=[];
  customerTypeName:any[]=[];
  ngOnInit(): void {
    this.supplierService.getAll().subscribe(data=>{
      this.supplierList=data;
      this.dataSource=this.supplierList;
      for(let element of this.supplierList){
         this.customerTypeService.getByID(element.typeId).subscribe(res=>{
         this.customerType=res;
         this.customerTypeName.push(this.customerType.typeName);
        
       },error=>console.log(error));
      }
      console.log(this.supplierList);
    },error=>{
      console.log(error);
    })
  }
  navigateToAddSupplier(){
    this.router.navigate(['/home/stock/addSupplier']);
  }
  NavigationToEditSupplier(id:number){
    this.router.navigate(['/home/stock/editSupplier',{id:id}]);
    console.log(id);
  }
  deleteSupplier(id:number){
    this.dialogService.openConfirmDialog().afterClosed().subscribe(res=>{
      if(res==true){
        this.supplierService.removeD(id).subscribe(res=>{
          console.log('delete successfully');
          this.supplierService.getAll().subscribe(data=>{
            this.supplierList=data;
            this.dataSource=this.supplierList;
          },error=>{console.log(error)});
        },error=>{
          console.log(error);
        });
      }
    });
  }



}
