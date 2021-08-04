import { EventEmitter, Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  listChangedEvents: EventEmitter<Post[]> = new EventEmitter();
  listOfPost: Post[] = [
    new Post(
      'Nature',
      'bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl',
      'https://images.indianexpress.com/2021/02/Green-solution.jpg',
      'test@test.com',
      new Date(),
      10
    ),
    // new Post(
    //   'teck',
    //   'bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl',
    //   'https://itchronicles.com/wp-content/uploads/2021/01/technology-impact-on-life-1024x566.jpg',
    //   'test@test.com',
    //   new Date(),
    //   15
    // ),
    // new Post(
    //   'humbi',
    //   'bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl',
    //   'https://media-cdn.tripadvisor.com/media/photo-s/14/cf/f3/ed/thousand-year-old-temple.jpg',
    //   'test@test.com',
    //   new Date(),
    //   11
    // ),
    // new Post(
    //   'Nature',
    //   'bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl bl',
    //   'https://images.indianexpress.com/2021/02/Green-solution.jpg',
    //   'test@test.com',
    //   new Date(),
    //   15
    // ),
  ];

  //current post -1
  getPost() {
    return this.listOfPost;
  }

  //delete post 2
  deletePost(index: number) {
    this.listOfPost.splice(index, 1);
  }

  //add new post 3
  addPost(post: Post) {
    this.listOfPost.push(post);
  }

  //edit post 4
  updatePost(index: number, post: Post) {
    this.listOfPost[index] = post;
  }
  //get a single post for edit 5
  getSinglePost(index: number) {
    return this.listOfPost[index];
  }
  //post-like 6
  likePost(index: number) {
    this.listOfPost[index].numberOfLikes += 1;
  }
  //replace with the new downloded data 7
  setPosts(listOfPosts: Post[]) {
    this.listOfPost = listOfPosts;
    this.listChangedEvents.emit(listOfPosts);
  }
}
