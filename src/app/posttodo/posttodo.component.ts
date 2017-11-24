import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

import { Post } from '../post';
import { Todo } from '../todo';
import { PostsTodosService } from '../posts-todos.service';

@Component({
  selector: 'app-posttodo',
  templateUrl: './posttodo.component.html',
  styleUrls: ['./posttodo.component.css']
})
export class PosttodoComponent implements OnInit {
  posts: Post[];
  todos: Todo[];

  constructor(private route: ActivatedRoute,
              private postsTodosService: PostsTodosService) { }

  ngOnInit() {
    this.getPosts();
    this.getTodos();
  }

  getPosts(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postsTodosService.getUserPosts(id)
        .subscribe( post => {
          this.posts = post;
          console.log(post);
        });
  }

  getTodos(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postsTodosService.getUserTodos(id)
        .subscribe( todo => {
          this.todos = todo;
          console.log('todo:', todo);
        });
  }
}
