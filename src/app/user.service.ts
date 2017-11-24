import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

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

  getUser(user: User): Observable<User> {
    return this.restangular.one('users', user.id).get();
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
}
