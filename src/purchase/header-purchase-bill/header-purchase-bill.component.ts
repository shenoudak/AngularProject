import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-purchase-bill',
  templateUrl: './header-purchase-bill.component.html',
  styleUrls: ['./header-purchase-bill.component.scss']
})
export class HeaderPurchaseBillComponent implements OnInit {

  @Input()parentData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
