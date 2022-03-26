import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tax } from 'src/app/shared_classes_intefaces/tax';
import { TaxService } from '../taxService/tax.service';

@Component({
  selector: 'app-edit-tax',
  templateUrl: './edit-tax.component.html',
  styleUrls: ['./edit-tax.component.scss']
})
export class EditTaxComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private taxService:TaxService,private activatedRoute:ActivatedRoute) { }
  taxList:Tax[]=[];
  tax:Tax={} as Tax;
  taxID:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parms=>{
      this.taxID=parms.get('id');
      console.log(this.taxID);
        this.taxService.getByID(this.taxID).subscribe(data=>{
       this.tax=data;
       this.registrationForm.get("Name")?.patchValue(this.tax.name);
       this.registrationForm.get("Percentage")?.patchValue(this.tax.percentage);
       this.registrationForm.get("Description")?.patchValue(this.tax.description);
     },error=>{console.log(error)});
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
   taxObj:any;
    editData(){
      this.taxObj=new Tax(this.Name?.value,this.Description?.value,this.Percentage?.value);
      this.taxObj.id=this.taxID;
      this.taxService.update(this.taxID,this.taxObj).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/home/tax']);
      },error=>{
        console.log(error);
      });
      
      console.log(this.tax);
}

}
