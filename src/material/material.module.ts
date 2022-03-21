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
  MatTableModule


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
