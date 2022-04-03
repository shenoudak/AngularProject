import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { StockService } from 'src/stock/stock/stock.service';
import { ConfirmDeleteService } from '../sharedServics/confirm-delete.service';
import { Stock } from '../shared_classes_intefaces/stock';
@Component({
  selector: 'app-show-stock',
  templateUrl: './show-stock.component.html',
  styleUrls: ['./show-stock.component.scss']
})
export class ShowStockComponent implements OnInit {

  constructor(private router:Router,private activateRoute:ActivatedRoute,private confirmDeleteService:ConfirmDeleteService,private stockService:StockService ) { }
  stockList:any[]=[]//[{ID:1,name:"main",address:"assiut"},{ID:2,name:"main",address:"assiut"},{ID:3,name:"main",address:"assiut"}];
  displayedColumns: string[] = ['name', 'address',"actions"];
  dataSource:any=[];
  ngOnInit(): void {
    this.stockService.getAll().subscribe((data)=>{
      this.stockList=data;
      this.dataSource=this.stockList;
      console.log(data);
    },error=>{
      console.log(error);
    })
  }
  navigateToAddStock(){
    this.router.navigate(['/home/stock/add'])
  }
  NavigationToEdit(id:number){
    this.router.navigate(['/home/stock/edit',{id:id}]);
    console.log(id);
  }
  deleteStock(id:number){
    console.log(id);
    this.confirmDeleteService.openConfirmDialog().afterClosed().subscribe(res=>{
      if(res==true){
        this.stockService.removeD(id).subscribe(data=>{
          this.stockService.getAll().subscribe((data)=>{
            this.stockList=data;
            this.dataSource=this.stockList;
            console.log(data);
          },error=>{
            console.log(error);
          });
          console.log(data);
        },error=>{
          console.log(error);
        })
      }
    })
  }
}
  
  /*dataToDisplay = [...this.stockList];

  dataSource = new ExampleDataSource(this.dataToDisplay);

  addData() {
    const randomElementIndex = Math.floor(Math.random() * this.stockList.length);
    this.dataToDisplay = [...this.dataToDisplay, this.stockList[randomElementIndex]];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }
}

class ExampleDataSource extends DataSource<Stock> {
  private _dataStream = new ReplaySubject<Stock[]>();

  constructor(initialData: Stock[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Stock[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: Stock[]) {
    this._dataStream.next(data);
  }
  //////////////////////////
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];*/



