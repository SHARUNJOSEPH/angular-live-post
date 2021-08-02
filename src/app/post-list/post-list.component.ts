import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  listOfPost: Post[] = [
    new Post(
      'Nature',
      'bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl',
      'https://images.indianexpress.com/2021/02/Green-solution.jpg',
      'test@test.com',
      new Date()
    ),
    new Post(
      'teck',
      'bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl',
      'https://itchronicles.com/wp-content/uploads/2021/01/technology-impact-on-life-1024x566.jpg',
      'test@test.com',
      new Date()
    ),
    new Post(
      'humbi',
      'bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl',
      'https://media-cdn.tripadvisor.com/media/photo-s/14/cf/f3/ed/thousand-year-old-temple.jpg',
      'test@test.com',
      new Date()
    ),
    new Post(
      'Nature',
      'bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl',
      'https://images.indianexpress.com/2021/02/Green-solution.jpg',
      'test@test.com',
      new Date()
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
