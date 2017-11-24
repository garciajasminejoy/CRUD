import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Restangular } from 'ngx-restangular';

import { Post } from './post';
import { Todo } from './todo';

@Injectable()
export class PostsTodosService {

  constructor(private restangular: Restangular) { }

  getUserPosts(userid: number): Observable<Post[]> {
    return this.restangular.one('users', userid).all('posts').getList();
  }

  getUserTodos(userid: number): Observable<Todo[]> {
    return this.restangular.one('users', userid).all('todos').getList();
  }
}
