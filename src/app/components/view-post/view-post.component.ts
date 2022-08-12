import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  myPost: Post | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.myPost = this.postsService.getPostById(parseInt(params['idpost'])));
  }

}
