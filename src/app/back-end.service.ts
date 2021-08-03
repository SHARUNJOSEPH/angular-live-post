import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post.service';

//  https://live-posts-90339-default-rtdb.firebaseio.com/

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostService, private http: HttpClient) {}

  // fun 1- save
  saveData() {
    const listOfPosts: Post[] = this.postService.getPost(); //get list of post from post service
    this.http
      .put(
        'https://live-posts-90339-default-rtdb.firebaseio.com/post.json',
        listOfPosts
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
  // fun-2 - fetch
}
