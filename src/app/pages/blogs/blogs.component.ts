import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetblogsService } from 'src/app/service/getblogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  id:any;
  blogs:any;
  constructor(private activeRout:ActivatedRoute,private localSer:GetblogsService) { }

  ngOnInit(): void {
    this.id=this.activeRout.snapshot.params['id'];
    this.blogs= this.localSer.getSpecificBlog(this.id);
  }
  delete(){
    console.log(this.id)
    this.localSer.delete(this.id)
  }

}
