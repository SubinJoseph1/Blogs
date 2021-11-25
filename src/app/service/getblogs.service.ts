import { Injectable } from '@angular/core';
import { BlogserviceService } from './blogservice.service';

@Injectable({
  providedIn: 'root'
})
export class GetblogsService {

  blogarr:any;
  blogsArr:any;
  blogs:any;
  constructor(private bloggerservice:BlogserviceService) {
    this.blogs=localStorage.getItem("blogs");
   
    if(!this.blogs){
     this.getData();
     return;
    }
    this.retriveData();
  }

  formmethod(exform:any){
   this.blogsArr.push(exform);
   localStorage.setItem("blogs", JSON.stringify(this.blogsArr));
    
  }

  getData(){
     this.bloggerservice.fetchAllBlogs().subscribe(data => {
      this.blogarr = data.articles;
      localStorage.setItem("blogs", JSON.stringify(this.blogarr));
      this.retriveData();
  })
}

getAllBlogs(){
  return this.blogsArr.slice().reverse();
}

retriveData() {
  this.blogsArr = JSON.parse(localStorage.getItem("blogs") || '{}');
}


  getBlogs(blogCount: number){
    
    return this.blogsArr.slice(0, blogCount);
  }

  getSpecificBlog(index:any){
    return this.blogsArr[index];
  }

delete(index:any){
  console.log("aa",index);
  this.blogsArr.splice(index,1);

}
 

}