import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from './user';
import { Post } from './post';


import { Restangular } from 'ngx-restangular';
import { Todo } from './todo';

@Injectable()
export class UserService {

  private users: User[];
  private posts: Post[];
  private todos: Todo[];

  constructor(private restangular: Restangular) {}

  getUsers(): Observable<User[]> {
    return this.restangular.all('users').getList();
  }

  getUser(id: number): Observable<User> {
    return this.restangular.one('users', id).get();
  }

  addUser(user: User): Observable<User> {
    return this.restangular.all('users').post(user);
  }

  updateUser(user: User): Observable<User> {
    return this.restangular.one('users', user.id).customPUT(user);
  }

  deleteUser(user: User): Observable<User> {
    return this.restangular.one('users', user.id).remove();
  }

  getUserPosts(userid: number): Observable<Post[]> {
    return this.restangular.one('users', userid).all('posts').getList();
  }

  getUserTodos(userid: number): Observable<Todo[]> {
    return this.restangular.one('users', userid).all('todos').getList();
  }
}
