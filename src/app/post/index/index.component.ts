import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  post: Post[]=[
    // {id: 1, name:"Shershaah", date: "27/07/2021", seen: "watched", img: "https://m.media-amazon.com/images/M/MV5BMjk1NzcwMDUtNDU4ZC00MzlhLTkzZjAtM2MxMTRjZGE0ODdhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg"},
    // {id: 2, name:"Jai Bhim", date: "27/07/2021", seen: "watched", img: "https://www.livelaw.in/h-upload/2021/11/03/403473-jai-bhim.jpg"},

  ];
  
  constructor(
    public router: Router, 
    private postService: PostService 
  ) {}

  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Post[]) => {
      console.log(data);
      this.post = data;
      console.log(this.post);
    });
  }

  addMovie(){
    this.router.navigate(['/post/create']);
  }
  viewMovie(id: number){
    this.router.navigate(['/post/', 'view', id]);
  }

  editMovie(id: number){
    this.router.navigate(['/post/edit/' + id.toString()]);
  }

  deletePost(id: number){
    this.postService.delete(id).subscribe((res) =>{
      this.post = this.post.filter(item => item.id !== id);
      console.log('Data deleted successfully');
    });
  }

}
