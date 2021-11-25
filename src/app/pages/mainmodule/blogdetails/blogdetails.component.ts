import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetblogsService } from 'src/app/service/getblogs.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {

  id:any;
  blogs:any;
  constructor(private activeRout:ActivatedRoute,private localSer:GetblogsService) { }

  ngOnInit(): void {
    this.id=this.activeRout.snapshot.params['id'];
    this.blogs= this.localSer.getSpecificBlog(this.id);
  }



}
