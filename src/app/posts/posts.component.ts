import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostModal } from '../post.modal';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: PostModal[];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

  getDetail(id: number) {
    this.postService.getPostDetail(id).subscribe(post => {
      alert(`datails for ${post.title} by id : ${id}`);
    })
  }

}
