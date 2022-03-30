import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDeleteService } from 'src/app/sharedServics/confirm-delete.service';
import { Employee } from 'src/app/shared_classes_intefaces/employee';
import { Stock } from 'src/app/shared_classes_intefaces/stock';
import { TransferOperation } from 'src/app/shared_classes_intefaces/transferOperation';
import { EmployeeService } from 'src/employee/services/employee.service';
import { TransferOperationService } from '../services/transfer-operation.service';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-show-transfer-operation',
  templateUrl: './show-transfer-operation.component.html',
  styleUrls: ['./show-transfer-operation.component.scss']
})
export class ShowTransferOperationComponent implements OnInit {
  displayedColumns: string[] = ['date','notes','employeeName','fromStock','toStock','actions'];
  dataSource:any=[];
  constructor(private router:Router,private dialogService:ConfirmDeleteService,private transferOperationService:TransferOperationService,private employeeService:EmployeeService,private stockService:StockService ) { }
  transferOperationList:TransferOperation[]=[];
  fromStock:Stock={} as Stock;
  toStock:Stock={} as Stock;
  employee={} as Employee;
  employeeNamesList:any[]=[];
  fromStockNamesList:any[]=[];
  toStockNamesList:any[]=[];
  ngOnInit(): void {
    this.transferOperationService.getAll().subscribe(data=>{
      this.dataSource=data;
      console.log(data);
      for(let element of this.dataSource){
         this.stockService.getByID(element.fromStockId).subscribe(res=>{
         this.fromStock=res;
         this.fromStockNamesList.push(this.fromStock.name);
         },error=>{
           console.log(error);
         }
         );
         this.stockService.getByID(element.toStockId).subscribe(res=>{
          this.toStock=res;
          this.toStockNamesList.push(this.toStock.name);
         },error=>{
           console.log(error);
         });
         this.employeeService.getByID(element.employeeId).subscribe(res=>{
          this.employee=res;
          this.employeeNamesList.push(this.employee.name);
         },error=>{
           console.log(error);
         });
        }
        
         
         },error=>{
           console.log(error);
         });
  }
  navigateToAddTranferOperation(){
    this.router.navigate(['/home/stock/addTransfer']);
  }
  NavigationToEditTransferOperation(id:number){
    this.router.navigate(['/home/stock/editTransfer',{id:id}]);
    console.log(id);
  }
  deleteTransferOperation(id:number){
    this.dialogService.openConfirmDialog().afterClosed().subscribe(res=>{
      if(res==true){
        this.transferOperationService.removeD(id).subscribe(res=>{
          console.log('delete successfully');
          this.transferOperationService.getAll().subscribe(data=>{
            this.dataSource=data;
          },error=>{console.log(error)});
        },error=>{
          console.log(error);
        });
      }
      },error=>{
        console.log(error);
    }
  );
  
  }
}