import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category.interface';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formNewPost: FormGroup;
  arrCategories: Category[] | undefined;
  newPost: Post | undefined;

  constructor(
    private postsService: PostsService,
    private router: Router
  ) {
    this.formNewPost = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(15)
      ]),
      body: new FormControl('', [
        Validators.required
      ]),
      author: new FormControl('', [
        Validators.required
      ]),
      img: new FormControl('', [
        Validators.required,
        Validators.pattern(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png)/)
      ]),
      date: new FormControl('', [
        Validators.required
      ]),
      category: new FormControl('', [
        Validators.required
      ]),
    })
  }

  ngOnInit(): void {
    this.arrCategories = this.postsService.getAllCategories();
  }

  getDataForm() {
    this.newPost = this.formNewPost.value;
    this.postsService.addPost(this.formNewPost.value);
    alert('El artículo se ha publicado correctamente.');
    this.router.navigate(['/home']);
  }

  checkControl(pField: string, pValidator: string): boolean {
    if (this.formNewPost.get(pField)?.hasError(pValidator) && this.formNewPost.get(pField)?.touched) {
      return true;
    }
    else {
      return false;
    }
  }
}
