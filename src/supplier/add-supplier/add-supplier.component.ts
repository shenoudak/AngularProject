import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss']
})
export class AddSupplierComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  addSupplier=this.fb.group({
    Name:['',Validators!.required],
    Phone:['',[Validators!.required,Validators!.pattern("^((\\+91-?)|0)?[0-9]{11}$")]],
    Address:['',Validators!.required],
    DebitBlance:[,Validators!.required],
    TypeId:['',Validators!.required]
  });

  ngOnInit(): void {
  }

}
