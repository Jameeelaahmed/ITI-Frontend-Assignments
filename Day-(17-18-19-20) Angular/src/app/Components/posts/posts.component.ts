import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/Models/posts';
import { PostsService } from 'src/app/Services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Posts[] = [];
  constructor(public postsService: PostsService) {}
  
  ngOnInit(): void {
    this.postsService.getAllPosts().subscribe({
      next: (data) => {
        this.posts = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
