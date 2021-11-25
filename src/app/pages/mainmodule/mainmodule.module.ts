import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainmoduleRoutingModule } from './mainmodule-routing.module';
import { HomeComponent } from './home/home.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';


@NgModule({
  declarations: [
    HomeComponent,
    BlogdetailsComponent
  ],
  imports: [
    CommonModule,
    MainmoduleRoutingModule
  ]
})
export class MainmoduleModule { }
