import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogserviceService } from 'src/app/service/blogservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogarray:any;
 
  constructor(private service:BlogserviceService,private router: Router) { }

  ngOnInit(): void {
    this.service.fetchAllBlogs().subscribe(data => {
      this.blogarray = data;
       
       
     })
  }

  

}
