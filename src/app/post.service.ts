import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModal } from './post.modal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostModal[]> {
    return this.http.get<PostModal[]>("posts");    // it will work as 'https://jsonplaceholder.typicode.com/posts' after intercepting
  }

  getPostDetail(id: number) {
    return this.http.get<PostModal>(`posts/${id}`)   // it will work as 'https://jsonplaceholder.typicode.com/posts/id' after intercepting
  }
}
