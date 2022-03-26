import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.scss']
})
export class EditSupplierComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  editSupplier=this.fb.group({
    Name:['',Validators!.required],
    Phone:['',[Validators!.required,Validators!.pattern("^((\\+91-?)|0)?[0-9]{11}$")]],
    Address:['',Validators!.required],
    DebitBlance:[,Validators!.required],
    TypeId:['',Validators!.required]
  });

  ngOnInit(): void {
  }

}
