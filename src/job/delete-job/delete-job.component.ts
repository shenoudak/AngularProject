import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-job',
  templateUrl: './delete-job.component.html',
  styleUrls: ['./delete-job.component.scss']
})
export class DeleteJobComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  delelation=this.fb.group({
    Title:['',Validators.required],
    Describtion:['',Validators.required]
  })

  ngOnInit(): void {
  }

}
