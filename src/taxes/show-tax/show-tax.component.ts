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
  taxList:any[]=
  [
    {ID:1,Name:'shenouda',Percentage:"10%",Description:"D1"},
    {ID:2,Name:'Romany',Percentage:"20%",Description:"D2"},
    {ID:3,Name:'Atef',Percentage:"30%",Description:"D3"},
  ];
  ngOnInit(): void {
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
        },error=>{
          console.log(error);
        });
      }
    });
  }

 

}
