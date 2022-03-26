import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-spplier',
  templateUrl: './delete-spplier.component.html',
  styleUrls: ['./delete-spplier.component.scss']
})
export class DeleteSpplierComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  deleteSupplier=this.fb.group({
    Name:['',Validators!.required],
    Phone:['',[Validators!.required,Validators!.pattern("^((\\+91-?)|0)?[0-9]{11}$")]],
    Address:['',Validators!.required],
    DebitBlance:[,Validators!.required],
    TypeId:['',Validators!.required]
  });

  ngOnInit(): void {
  }

}
