import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxesRoutingModule } from './taxes-routing.module';
import { ShowTaxComponent } from './show-tax/show-tax.component';
import { AddTaxComponent } from './add-tax/add-tax.component';
import { EditTaxComponent } from './edit-tax/edit-tax.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShowTaxComponent,
    AddTaxComponent,
    EditTaxComponent
  ],
  imports: [
    CommonModule,
    TaxesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TaxesModule { }
