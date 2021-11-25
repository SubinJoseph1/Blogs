import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { GetblogsService } from 'src/app/service/getblogs.service';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
  
  constructor(private service:GetblogsService) { }
  value:any;
  blogmodle:any;
  exform:any;

 

  ngOnInit() {

    this.exform = new FormGroup({
      'title' : new FormControl('', Validators.required),
      'description' : new FormControl('',Validators.required),
      'urlToImage' : new FormControl('',Validators.required),
      'publishedAt' : new FormControl('', Validators.required),
      'content' : new FormControl('', Validators.required),

    });
    }
    
    clicksub(exform:any) {

      this.blogmodle={
        title:exform.value.title,
        description:exform.value.description,
        urlToImage:exform.value.urlToImage,
        publishedAt:exform.value.publishedAt,
        content:exform.value.content,

       }
      this.value=this.exform.value;
      this.exform.reset();
      this.service.formmethod(this.blogmodle)
    }
    get title() {
      return this.exform.get('title');
    }
    get description() {
      return this.exform.get('description');
    }
    get urlToImage() {
      return this.exform.get('urlToImage');
    }
    get publishedAt() {
      return this.exform.get('publishedAt');
    }
    get content() {
      return this.exform.get('content');
    }
  
  }