import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogserviceService } from 'src/app/service/blogservice.service';
import { GetblogsService } from 'src/app/service/getblogs.service';
import { BlogdetailsComponent } from '../mainmodule/blogdetails/blogdetails.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private service:BlogserviceService,private router: Router,private servicea:GetblogsService) {


   }
  blogarray:any;
  ngOnInit(): void {
    this.blogarray =this.servicea.getBlogs(5) ;
  
  }
}
