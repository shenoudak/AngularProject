import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tax } from 'src/app/shared_classes_intefaces/tax';
import { TaxService } from '../taxService/tax.service';

@Component({
  selector: 'app-edit-tax',
  templateUrl: './edit-tax.component.html',
  styleUrls: ['./edit-tax.component.scss']
})
export class EditTaxComponent implements OnInit {

  constructor(private fb:FormBuilder,private taxService:TaxService,private activatedRoute:ActivatedRoute) { }
  taxList:Tax[]=[];
  taxID:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parms=>{
      this.taxID=parms.get('id');
      console.log(this.taxID);
       // this.taxService.getByID(this.taxID).subscribe(data=>{
    //   this.taxList=data;
    // })
  });
  }
  get Name(){  
    return this.registrationForm.get('Name');
   }
  
   get Percentage(){  
    return this.registrationForm.get('Percentage');
   }
   get Description(){  
    return this.registrationForm.get('Description');
   }
  
   registrationForm=this.fb.group(
     {
      Name:['',[Validators.required]],
      Percentage:[0,[Validators.required,Validators.pattern('^[0-9]+$')]],
      Description:['',[Validators.required]],
     }
   );
   tax:any;
    editData(){
      this.tax=new Tax(1,this.Name?.value,this.Percentage?.value,this.Description?.value);

      this.taxService.insert(this.tax).subscribe(data=>{
        console.log(data);
      },error=>{
        console.log(error);
      });
      
      console.log(this.tax);
}

}
