import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Tax } from 'src/app/shared_classes_intefaces/tax';
import { TaxService } from '../taxService/tax.service';

@Component({
  selector: 'app-add-tax',
  templateUrl: './add-tax.component.html',
  styleUrls: ['./add-tax.component.scss']
})
export class AddTaxComponent implements OnInit {

  constructor(private fb:FormBuilder,private taxService:TaxService) { }
  taxList:Tax[]=[];
  ngOnInit(): void {
    this.taxService.getAll().subscribe(data=>{
      this.taxList=data;
    },error=>{
      console.log(error);
    })
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
    SaveData(){
      this.tax=new Tax(1,this.Name?.value,this.Percentage?.value,this.Description?.value);

      this.taxService.insert(this.tax).subscribe(data=>{
        console.log(data);
      },error=>{
        console.log(error);
      });
      
      console.log(this.tax);
}

}
