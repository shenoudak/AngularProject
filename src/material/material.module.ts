import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import{MatButtonToggleModule} from '@angular/material/button-toggle';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
const materialComponents=
[
  MatButtonToggleModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatDividerModule,
  MatListModule,
  MatIconModule,
  MatSelectModule,
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  imports: [
    materialComponents
  ],
  exports:
  [
    materialComponents
  ]
})
export class MaterialModule { }
