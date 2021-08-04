import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  listOfPost: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.listOfPost = this.postService.getPost();
    this.postService.listChangedEvents.subscribe((listOfPost: Post[]) => {
      this.listOfPost = this.postService.getPost();
    });
  }
}
