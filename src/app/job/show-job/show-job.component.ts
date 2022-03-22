import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-job',
  templateUrl: './show-job.component.html',
  styleUrls: ['./show-job.component.scss']
})
export class ShowJobComponent implements OnInit {

  constructor() { }
  job=[{
    jobTitle:"Engineer",
    jobDecribtion:"Engineering"
  },
  {
    jobTitle:"doctor",
    jobDecribtion:"Medicin"
  },
  {
    jobTitle:"Teacher",
    jobDecribtion:"Lening"
  },
]

  ngOnInit(): void {
  }

}
