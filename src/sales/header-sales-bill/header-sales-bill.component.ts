import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-sales-bill',
  templateUrl: './header-sales-bill.component.html',
  styleUrls: ['./header-sales-bill.component.scss']
})
export class HeaderSalesBillComponent implements OnInit {

  constructor() { }
  @Input()parentData:any;
  ngOnInit(): void {
  }

}
