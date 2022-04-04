import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpiredProduct } from 'src/app/shared_classes_intefaces/expiredProduct';
import { ExpiredProductService } from '../productService/expired-product.service';
import { ProductService } from '../productService/product.service';

@Component({
  selector: 'app-edit-expired-product',
  templateUrl: './edit-expired-product.component.html',
  styleUrls: ['./edit-expired-product.component.scss']
})
export class EditExpiredProductComponent implements OnInit {

  dateToDay: any;
  maxDate: any;
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private datePipe: DatePipe, private router: Router, private expiredProductService: ExpiredProductService, private productService: ProductService) {
    const currentYear = new Date().getFullYear();
    const today = new Date();
    this.dateToDay = today;
    const month = today.getMonth();
    const year = today.getFullYear();
    const day = today.getDay();
    this.maxDate = new Date(year, month, day + 3);

  }
  productList: any[] = [];
  myDateToDay: any;
  expProductId: any;
  expProductObject: ExpiredProduct = {} as ExpiredProduct;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parms => {
      this.expProductId = parms.get('id');
      console.log(this.expProductId);
      this.expiredProductService.getByID(this.expProductId).subscribe(data => {
        this.expProductObject = data;
        console.log(this.expProductObject);
        this.productService.getAll().subscribe(data => {
          this.productList = data;
          console.log(this.productList);
        }, error => {
          console.log(error);
        });
        this.registrationForm.get('Amount')?.patchValue(this.expProductObject.amount);
        this.registrationForm.get('DateAdded')?.patchValue(this.expProductObject.dateAdded);
        this.registrationForm.get('Notes')?.patchValue(this.expProductObject.notes);
        this.registrationForm.get('ProductionDate')?.patchValue(this.expProductObject.productionDate);
        this.registrationForm.get('ProductId')?.patchValue(this.expProductObject.productId);
      })
    })
    this.myDateToDay = new Date();
    this.productService.getAll().subscribe(data => {
      this.productList = data;
    }, error => {
      console.log(error);
    })
  }


  get Amount() {
    return this.registrationForm.get('Amount');
  }
  get DateAdded() {
    return this.registrationForm.get('DateAdded');
  }
  get Notes() {
    return this.registrationForm.get('Notes');
  }
  get ProductionDate() {
    return this.registrationForm.get('ProductionDate');
  }
  get ProductId() {
    return this.registrationForm.get('ProductId');
  }
  registrationForm = this.fb.group(
    {
      Amount: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      DateAdded: ['',],
      Notes: ['', [Validators.required]],
      ProductId: ['', Validators.required],
      ProductionDate: ['', [Validators.required]],
    }
  );
  expiredproduct: ExpiredProduct = {} as ExpiredProduct;
  changeDataFormat: any;
  changeDataFormatPD: any;
  SaveData() {
    this.changeDataFormat = this.datePipe.transform(this.myDateToDay, 'yyyy-MM-dd')
    this.registrationForm.get('DateAdded')?.patchValue(this.changeDataFormat);
    this.changeDataFormatPD = this.datePipe.transform(this.ProductionDate?.value, 'yyyy-MM-dd')
    this.registrationForm.get('ProductionDate')?.patchValue(this.changeDataFormatPD);

    this.expiredproduct = new ExpiredProduct(this.Amount?.value, this.DateAdded?.value, this.Notes?.value, this.ProductId?.value, this.ProductionDate?.value);
    this.expiredproduct.id = this.expProductId;
    this.expiredProductService.update(this.expProductId, this.expiredproduct).subscribe(data => {
      console.log(data);
      this.router.navigate(['/home/product/showExpProduct'])
    }, error => {
      console.log(error);
    });

    console.log(this.expiredproduct);
  }
}



