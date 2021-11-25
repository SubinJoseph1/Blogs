import { Component, OnInit } from '@angular/core';
import { GetblogsService } from '../service/getblogs.service';

@Component({
  selector: 'app-allblogs',
  templateUrl: './allblogs.component.html',
  styleUrls: ['./allblogs.component.css']
})
export class AllblogsComponent implements OnInit {

  constructor(private service:GetblogsService) { }
  blogs:any;
  ngOnInit(): void {

   this.blogs= this.service.getAllBlogs();

  }

}
