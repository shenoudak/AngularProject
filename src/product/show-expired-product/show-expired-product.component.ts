import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
import { ExpiredProduct } from 'src/app/shared_classes_intefaces/expiredProduct';
import { Product } from 'src/app/shared_classes_intefaces/peoduct';
import { ExpiredProductService } from '../productService/expired-product.service';
import { ProductService } from '../productService/product.service';

@Component({
  selector: 'app-show-expired-product',
  templateUrl: './show-expired-product.component.html',
  styleUrls: ['./show-expired-product.component.scss']
})
export class ShowExpiredProductComponent implements OnInit {

  product: Product = {} as Product;
  displayedColumns: string[] = ['productId','amount', 'dateAdded', 'note', 'proDate', "actions"];
  dataSource: any = [];
  constructor(private router: Router, private productService: ProductService, private dialogService: ConfirmDeleteService, private expiredProductService: ExpiredProductService) { }
  expProductList: ExpiredProduct[] = [];
  productNamesList: any[] = [];
  ngOnInit(): void {
    this.expiredProductService.getAll().subscribe(data => {
      this.expProductList = data;
      this.dataSource = this.expProductList;
      for (let element of this.expProductList) {
        this.productService.getByID(element.productId).subscribe(res => {
          this.product = res;
          this.productNamesList.push(this.product.name);

        }, error => console.log(error));
      }
    }, error => {
      console.log(error);
    })
  }
  navigateToAddExpProduct() {
    this.router.navigate(['/home/product/addExpProduct']);
  }
  NavigationToEditExpProduct(id: number) {
    this.router.navigate(['/home/product/editExpProduct', { id: id }]);
    console.log(id);
  }
  deleteExpProduct(id: number) {
    this.dialogService.openConfirmDialog().afterClosed().subscribe(res => {
      if (res == true) {
        this.expiredProductService.removeD(id).subscribe(res => {
          console.log('delete successfully');
          this.expiredProductService.getAll().subscribe(data => {
            this.expProductList = data;
            this.dataSource = this.expProductList;
          }, error => { console.log(error) });
        }, error => {
          console.log(error);
        });
      }
    });
  }
}
