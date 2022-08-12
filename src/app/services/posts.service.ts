import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category.interface';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPosts: Post[];
  private arrCategories: Category[];

  constructor() {
    this.arrPosts = new Array(
      {
        id: 9,
        title: "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, inventore eum. Reiciendis reprehenderit nostrum amet. Libero quia dolorum ut magnam voluptates, qui inventore iusto quas exercitationem? Pariatur obcaecati necessitatibus voluptates quae nam quam magnam nisi minus in est dicta, perspiciatis similique ipsum possimus labore voluptate. Saepe dolore eius obcaecati. Nam itaque tenetur distinctio veniam ipsa vitae voluptatibus dicta porro reiciendis sint? Ab consectetur aliquam aut soluta, quasi quaerat numquam eum voluptatem. Eaque, autem modi dolorum aspernatur eius natus dicta debitis doloremque neque blanditiis praesentium hic explicabo iure atque at est repudiandae repellendus culpa tempora corporis earum voluptas alias minus a?",
        author: 'Pepe García',
        img: 'https://picsum.photos/200/300.jpg',
        date: '2022-02-19',
        category: 'Playa'
      },
      {
        id: 8,
        title: "Qui est esse",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, inventore eum. Reiciendis reprehenderit nostrum amet. Libero quia dolorum ut magnam voluptates, qui inventore iusto quas exercitationem? Pariatur obcaecati necessitatibus voluptates quae nam quam magnam nisi minus in est dicta, perspiciatis similique ipsum possimus labore voluptate. Saepe dolore eius obcaecati. Nam itaque tenetur distinctio veniam ipsa vitae voluptatibus dicta porro reiciendis sint? Ab consectetur aliquam aut soluta, quasi quaerat numquam eum voluptatem. Eaque, autem modi dolorum aspernatur eius natus dicta debitis doloremque neque blanditiis praesentium hic explicabo iure atque at est repudiandae repellendus culpa tempora corporis earum voluptas alias minus a?",
        author: 'Pepe García',
        img: 'https://picsum.photos/200/300.jpg',
        date: '2022-01-30',
        category: 'Montaña'
      },
      {
        id: 7,
        title: "Ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, inventore eum. Reiciendis reprehenderit nostrum amet. Libero quia dolorum ut magnam voluptates, qui inventore iusto quas exercitationem? Pariatur obcaecati necessitatibus voluptates quae nam quam magnam nisi minus in est dicta, perspiciatis similique ipsum possimus labore voluptate. Saepe dolore eius obcaecati. Nam itaque tenetur distinctio veniam ipsa vitae voluptatibus dicta porro reiciendis sint? Ab consectetur aliquam aut soluta, quasi quaerat numquam eum voluptatem. Eaque, autem modi dolorum aspernatur eius natus dicta debitis doloremque neque blanditiis praesentium hic explicabo iure atque at est repudiandae repellendus culpa tempora corporis earum voluptas alias minus a?",
        author: 'Pepe García',
        img: 'https://picsum.photos/200/300.jpg',
        date: '2022-01-26',
        category: 'Ciudad'
      },
      {
        id: 6,
        title: "Eum et est occaecati",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, inventore eum. Reiciendis reprehenderit nostrum amet. Libero quia dolorum ut magnam voluptates, qui inventore iusto quas exercitationem? Pariatur obcaecati necessitatibus voluptates quae nam quam magnam nisi minus in est dicta, perspiciatis similique ipsum possimus labore voluptate. Saepe dolore eius obcaecati. Nam itaque tenetur distinctio veniam ipsa vitae voluptatibus dicta porro reiciendis sint? Ab consectetur aliquam aut soluta, quasi quaerat numquam eum voluptatem. Eaque, autem modi dolorum aspernatur eius natus dicta debitis doloremque neque blanditiis praesentium hic explicabo iure atque at est repudiandae repellendus culpa tempora corporis earum voluptas alias minus a?",
        author: 'Pepe García',
        img: 'https://picsum.photos/200/300.jpg',
        date: '2022-01-20',
        category: 'Rural'
      },
      {
        id: 5,
        title: "Nesciunt quas odio",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, inventore eum. Reiciendis reprehenderit nostrum amet. Libero quia dolorum ut magnam voluptates, qui inventore iusto quas exercitationem? Pariatur obcaecati necessitatibus voluptates quae nam quam magnam nisi minus in est dicta, perspiciatis similique ipsum possimus labore voluptate. Saepe dolore eius obcaecati. Nam itaque tenetur distinctio veniam ipsa vitae voluptatibus dicta porro reiciendis sint? Ab consectetur aliquam aut soluta, quasi quaerat numquam eum voluptatem. Eaque, autem modi dolorum aspernatur eius natus dicta debitis doloremque neque blanditiis praesentium hic explicabo iure atque at est repudiandae repellendus culpa tempora corporis earum voluptas alias minus a?",
        author: 'Pepe García',
        img: 'https://picsum.photos/200/300.jpg',
        date: '2022-01-20',
        category: 'Festivales'
      },
      {
        id: 4,
        title: "Dolorem eum magni eos aperiam quia",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, inventore eum. Reiciendis reprehenderit nostrum amet. Libero quia dolorum ut magnam voluptates, qui inventore iusto quas exercitationem? Pariatur obcaecati necessitatibus voluptates quae nam quam magnam nisi minus in est dicta, perspiciatis similique ipsum possimus labore voluptate. Saepe dolore eius obcaecati. Nam itaque tenetur distinctio veniam ipsa vitae voluptatibus dicta porro reiciendis sint? Ab consectetur aliquam aut soluta, quasi quaerat numquam eum voluptatem. Eaque, autem modi dolorum aspernatur eius natus dicta debitis doloremque neque blanditiis praesentium hic explicabo iure atque at est repudiandae repellendus culpa tempora corporis earum voluptas alias minus a?",
        author: 'Pepe García',
        img: 'https://picsum.photos/200/300.jpg',
        date: '2022-01-01',
        category: 'Playa'
      },
      {
        id: 3,
        title: "Magnam facilis autem",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, inventore eum. Reiciendis reprehenderit nostrum amet. Libero quia dolorum ut magnam voluptates, qui inventore iusto quas exercitationem? Pariatur obcaecati necessitatibus voluptates quae nam quam magnam nisi minus in est dicta, perspiciatis similique ipsum possimus labore voluptate. Saepe dolore eius obcaecati. Nam itaque tenetur distinctio veniam ipsa vitae voluptatibus dicta porro reiciendis sint? Ab consectetur aliquam aut soluta, quasi quaerat numquam eum voluptatem. Eaque, autem modi dolorum aspernatur eius natus dicta debitis doloremque neque blanditiis praesentium hic explicabo iure atque at est repudiandae repellendus culpa tempora corporis earum voluptas alias minus a?",
        author: 'Pepe García',
        img: 'https://picsum.photos/200/300.jpg',
        date: '2021-12-19',
        category: 'Ciudad'
      },
      {
        id: 2,
        title: "Dolorem dolore est ipsam",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, inventore eum. Reiciendis reprehenderit nostrum amet. Libero quia dolorum ut magnam voluptates, qui inventore iusto quas exercitationem? Pariatur obcaecati necessitatibus voluptates quae nam quam magnam nisi minus in est dicta, perspiciatis similique ipsum possimus labore voluptate. Saepe dolore eius obcaecati. Nam itaque tenetur distinctio veniam ipsa vitae voluptatibus dicta porro reiciendis sint? Ab consectetur aliquam aut soluta, quasi quaerat numquam eum voluptatem. Eaque, autem modi dolorum aspernatur eius natus dicta debitis doloremque neque blanditiis praesentium hic explicabo iure atque at est repudiandae repellendus culpa tempora corporis earum voluptas alias minus a?",
        author: 'Pepe García',
        img: 'https://picsum.photos/200/300.jpg',
        date: '2021-12-12',
        category: 'Montaña'
      },
      {
        id: 1,
        title: "Nesciunt iure omnis dolorem tempora et accusantium",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, inventore eum. Reiciendis reprehenderit nostrum amet. Libero quia dolorum ut magnam voluptates, qui inventore iusto quas exercitationem? Pariatur obcaecati necessitatibus voluptates quae nam quam magnam nisi minus in est dicta, perspiciatis similique ipsum possimus labore voluptate. Saepe dolore eius obcaecati. Nam itaque tenetur distinctio veniam ipsa vitae voluptatibus dicta porro reiciendis sint? Ab consectetur aliquam aut soluta, quasi quaerat numquam eum voluptatem. Eaque, autem modi dolorum aspernatur eius natus dicta debitis doloremque neque blanditiis praesentium hic explicabo iure atque at est repudiandae repellendus culpa tempora corporis earum voluptas alias minus a?",
        author: 'Pepe García',
        img: 'https://picsum.photos/200/300.jpg',
        date: '2021-12-04',
        category: 'Rural'
      }
    );

    this.arrCategories = new Array(
      {title: 'Playa'},
      {title: 'Montaña'},
      {title: 'Ciudad'},
      {title: 'Rural'},
      {title: 'Festivales'},
    )
  }

  getAllPosts(): Post[] {
    return this.arrPosts;
  }

  addPost(pPost: any): void {
    let newPost: Post = {id: this.arrPosts.length+1, ...pPost };
    this.arrPosts.unshift(newPost);
  }

  getPostsByCategory(pCat: string) {
    return this.arrPosts.filter(post => post.category.toLocaleLowerCase() === pCat) 
  }

  getAllCategories() {
    return this.arrCategories;
  }

  getPostById(pId: number): Post | undefined {
    return this.arrPosts.find(post => post.id === pId);
  }
}
