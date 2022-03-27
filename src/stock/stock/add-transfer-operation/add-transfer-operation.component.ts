import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/shared_classes_intefaces/employee';
import { Stock } from 'src/app/shared_classes_intefaces/stock';
import { TransferOperation } from 'src/app/shared_classes_intefaces/transferOperation';
import { EmployeeService } from 'src/employee/services/employee.service';
import { TransferOperationService } from '../services/transfer-operation.service';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-add-transfer-operation',
  templateUrl: './add-transfer-operation.component.html',
  styleUrls: ['./add-transfer-operation.component.scss']
})
export class AddTransferOperationComponent implements OnInit {

  constructor(private fb: FormBuilder, private employeeService: EmployeeService,private transferOperationService:TransferOperationService, private stockService: StockService, private router: Router) { }
  stockList: Stock[] = [];
  employeeList: Employee[] = [];
  ngOnInit(): void {
    this.stockService.getAll().subscribe(data => {
      this.stockList = data;
      console.log(this.stockList);
    }, error => {
      console.log(error);
    }),
      this.employeeService.getAll().subscribe(data => {
        this.employeeList = data;
        console.log(this.employeeList);
      }, error => {
        console.log(error);
      })
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
  transferOperation: any;
  SaveData() {
    this.transferOperation = new TransferOperation(this.Date?.value, this.Notes?.value, this.EmployeeId?.value, this.FromStockId?.value, this.ToStockId?.value);

    this.transferOperationService.insert(this.transferOperation).subscribe(data => {
      console.log(data);
      this.router.navigate(['/home/stock/showTransfer']);
    }, error => {
      console.log(error);
    });

    console.log(this.transferOperation);
  }

}

