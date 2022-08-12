import { Component } from '@angular/core';
import { Category } from './interfaces/category.interface';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  year: number = new Date().getFullYear();
  arrCategories: Category[] = new Array();

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.arrCategories = this.postsService.getAllCategories();
  }
}
