import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/shared_classes_intefaces/employee';
import { Stock } from 'src/app/shared_classes_intefaces/stock';
import { TransferOperation } from 'src/app/shared_classes_intefaces/transferOperation';
import { EmployeeService } from 'src/employee/services/employee.service';
import { TransferOperationService } from '../services/transfer-operation.service';
import { StockService } from '../stock.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-edit-transfer-operation',
  templateUrl: './edit-transfer-operation.component.html',
  styleUrls: ['./edit-transfer-operation.component.scss']
})
export class EditTransferOperationComponent implements OnInit {

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private employeeService: EmployeeService, private transferOperationService: TransferOperationService, private stockService: StockService, private router: Router, private datePipe: DatePipe) { }
  stockList: Stock[] = [];
  changeDataFormat: any;
  transferOperationId: any;
  transferOperation: TransferOperation = {} as TransferOperation;
  employeeList: Employee[] = [];
  myDateToDay:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parms => {
      this.transferOperationId = parms.get('id');
      this.transferOperationService.getByID(this.transferOperationId).subscribe(data => {
        this.transferOperation = data;
        console.log(this.transferOperation);
        this.stockService.getAll().subscribe(data => {
          this.stockList = data;
        }
          , error => {
            console.log(error);
          });
        this.employeeService.getAll().subscribe(data => {
          this.employeeList = data;
        }
          , error => {
            console.log(error);
          });
        console.log(this.employeeList)

         this.changeDataFormat = this.datePipe.transform(this.transferOperation.date, 'yyyy-MM-dd')
         this.registrationForm.get('Date')?.patchValue(this.changeDataFormat);
        this.myDateToDay=this.transferOperation.date;
        this.registrationForm.get('Notes')?.patchValue(this.transferOperation.notes);
        this.registrationForm.get('FromStockId')?.patchValue(this.transferOperation.fromStockId);
        this.registrationForm.get('ToStockId')?.patchValue(this.transferOperation.toStockId);
        this.registrationForm.get('EmployeeId')?.patchValue(this.transferOperation.employeeId);
      }, error => {
        console.log(error);
      });
    });

  }
  get Date() {
    return this.registrationForm.get('Date');
  }
  get Notes() {
    return this.registrationForm.get('Notes');
  }
  get FromStockId() {
    return this.registrationForm.get('FromStockId');
  }
  get ToStockId() {
    return this.registrationForm.get('ToStockId');
  }
  get EmployeeId() {
    return this.registrationForm.get('EmployeeId');
  }

  registrationForm = this.fb.group(
    {
      Date: ['', [Validators.required]],
      Notes: ['',],
      EmployeeId: ['', [Validators.required]],
      FromStockId: ['', [Validators.required]],
      ToStockId: ['', [Validators.required]],
    }
  );
  transferOperationObj: TransferOperation = {} as TransferOperation;
  SaveData() {
    this.transferOperationObj = new TransferOperation(this.Date?.value, this.Notes?.value, this.EmployeeId?.value, this.FromStockId?.value, this.ToStockId?.value);
    this.transferOperationObj.id = this.transferOperationId;
    this.transferOperationService.update(this.transferOperationId, this.transferOperationObj).subscribe(data => {
      console.log(data);
      this.router.navigate(['/home/stock/showTransfer']);
    }, error => {
      console.log(error);
    });

    console.log(this.transferOperationObj);
  }
  stocksIsEqual: any = false;
  isEqualToFromStock() {
    this.stocksIsEqual = this.FromStockId?.value == this.ToStockId?.value;
    if (this.FromStockId?.value != '' || this.ToStockId?.value != '') {
      if (this.FromStockId?.value === this.ToStockId?.value) {
        this.stocksIsEqual = true;
      }
      else {
        this.stocksIsEqual = false;
      }
    }
  }

}
