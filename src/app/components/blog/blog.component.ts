import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  arrPostsBlog: Post[] = new Array();
  myCategory: string | undefined;

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.arrPostsBlog = this.postsService.getAllPosts();
  }

  ngDoCheck(): void { // Uso ngDoCheck para que pueda escuchar/comprobar cuándo cambio de categoría
    // Me suscribo a los cambios de ruta desde aquí, para escuchar los cambios cuando se produzcan
    this.activatedRoute.params.subscribe(params => this.myCategory = params['categoryTitle']);
    // Si myCategory es algo; entrará aquí, si sigue siendo undefined, se quedará como está
    if (this.myCategory !== undefined) {
      this.arrPostsBlog = this.postsService.getPostsByCategory(this.myCategory);
    }
  }
}
