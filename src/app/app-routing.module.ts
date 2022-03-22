import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { DeleteCategoryComponent } from './category/delete-category/delete-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { ShowCategoryComponent } from './category/show-category/show-category.component';
import { DeleteJobComponent } from './job/delete-job/delete-job.component';
import { EditJobComponent } from './job/edit-job/edit-job.component';
import { ShowJobComponent } from './job/show-job/show-job.component';

const routes: Routes = [
{path:"editCategory",component:EditCategoryComponent},
{path:"deleteCategory",component:DeleteCategoryComponent},
{path:"createCategory",component:AddCategoryComponent},
{path:"showCategory",component:ShowCategoryComponent},
{path:'showJob',component:ShowJobComponent},
{path:'editJob',component:EditJobComponent},
{path:'deleteJob',component:DeleteJobComponent},
{ path: '',   redirectTo: '/showJob', pathMatch: 'full' },
// {path:"**",component:ShowJobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
