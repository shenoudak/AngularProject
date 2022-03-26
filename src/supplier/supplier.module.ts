import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowSupplierComponent } from './show-supplier/show-supplier.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';
import { DeleteSpplierComponent } from './delete-spplier/delete-spplier.component';



@NgModule({
  declarations: [
    ShowSupplierComponent,
    AddSupplierComponent,
    EditSupplierComponent,
    DeleteSpplierComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    ShowSupplierComponent,
    AddSupplierComponent,
    EditSupplierComponent,
    DeleteSpplierComponent
    
  ]
})
export class SupplierModule { }
