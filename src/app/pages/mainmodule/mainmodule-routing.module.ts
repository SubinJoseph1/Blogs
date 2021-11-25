import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:HomeComponent
  // },
  {
    path:"blog/:id",
    component:BlogdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainmoduleRoutingModule { }
