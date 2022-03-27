import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';

const routes: Routes = 
[
  {path:'',component:ShowEmployeeComponent},
  {path:'home/employee/addEmployee',component:AddEmployeeComponent},
  {path:'home/employee/editEmployee',component:EditEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
