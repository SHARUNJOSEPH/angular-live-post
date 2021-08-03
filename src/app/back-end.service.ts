import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post.service';
import { tap } from 'rxjs/operators';

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
        //  console.log(res);
      });
  }
  // fun-2 - fetch
  fetchData() {
    //fetch the data from the data base
    this.http
      .get<Post[]>(
        'https://live-posts-90339-default-rtdb.firebaseio.com/post.json'
      )
      .pipe(
        tap((listOfPosts: Post[]) => {
          console.log(listOfPosts);

          //put the fetch data to the post-service
          this.postService.setPosts(listOfPosts);
        })
      )
      .subscribe();
  }
}
