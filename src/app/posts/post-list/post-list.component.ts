import { Component, OnChanges, Input } from '@angular/core';
import { Post } from '../shared/post.model';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnChanges {

  @Input() topic: string;
  posts: Post[];

  constructor(private postService: PostService) {
  }


  ngOnChanges(changes: any) {
    // trigger call to reddit api to get posts.
    this.postService.getPosts(changes.topic.currentValue)
                  .subscribe(
                  posts => this.posts = posts,
                  error => console.log(error)
                  );
  }

}
