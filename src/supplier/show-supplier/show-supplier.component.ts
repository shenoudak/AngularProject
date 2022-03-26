import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-show-supplier',
  templateUrl: './show-supplier.component.html',
  styleUrls: ['./show-supplier.component.scss']
})
export class ShowSupplierComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private confirmDeleteService:ConfirmDeleteService,private supplierServices:SupplierService) { }

  ngOnInit(): void {
  }
  supplierList=[{
    Name:"Mahmoud",Phone:"00201147780927",Address:"Assuit",DebitBlance:2000,TypeId:"Cash" },
    {id:1,Name:"Mazen",Phone:"00201147780999",Address:"Minia",DebitBlance:3000,TypeId:"depit" },
    {id:2, Name:"Anas",Phone:"00201147780942",Address:"Sohage",DebitBlance:5000,TypeId:"target" },
    {id:3, Name:"Adam",Phone:"00201147780927",Address:"Cairo",DebitBlance:1000,TypeId:"Cash" },

  ];
  showSupplier=({
    Name:['',Validators.required],
    Phone:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    Address:['',Validators.required],
    DebitBlance:['',Validators.required],
    TypeId:['',Validators.required]
  });

NavigateToAdd(){
  this.router.navigate(['/AddSupplier']);

}
NavigateToEdit(id:any){
  this.router.navigate(['/EditSupplier/'+id])
}
NavigateToDelete(id:any){
  // this.router.navigate(['/DeleteSupplier/'+id])
  this.confirmDeleteService.openConfirmDialog().afterClosed().subscribe(res=>{
    if(res==true){
      this.supplierServices.DeleteSupplier(id).subscribe(data=>{
        console.log(data);
      },error=>{
        console.log(error);
      })
    }
  })
}

}
