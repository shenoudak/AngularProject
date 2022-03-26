import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
import { TaxService } from '../taxService/tax.service';

@Component({
  selector: 'app-show-tax',
  templateUrl: './show-tax.component.html',
  styleUrls: ['./show-tax.component.scss']
})
export class ShowTaxComponent implements OnInit {

  constructor(private router:Router,private dialogService:ConfirmDeleteService,private taxService:TaxService ) { }
  taxList:any[]=[];
  ngOnInit(): void {
    this.taxService.getAll().subscribe((data)=>{
      this.taxList=data;
      console.log(data);
    },error=>{
      console.log(error);
    })
  }
  navigateToAddTax(){
    this.router.navigate(['/home/tax/addTax']);
  }
  NavigationToEditTax(id:number){
    this.router.navigate(['/home/tax/editTax',{id:id}]);
    console.log(id);
  }
  deleteTax(id:number){
    this.dialogService.openConfirmDialog().afterClosed().subscribe(res=>{
      if(res==true){
        this.taxService.removeD(id).subscribe(res=>{
          console.log('delete successfully');
          this.taxService.getAll().subscribe((data)=>{
            this.taxList=data;
            console.log(data);
          },error=>{
            console.log(error);
          })
        },error=>{
          console.log(error);
         
        });
      }
    });
  }

 

}
