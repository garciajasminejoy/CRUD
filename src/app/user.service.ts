import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from './user';
import { Post } from './post';

import { Restangular } from 'ngx-restangular';

@Injectable()
export class UserService {

  private users: User[];

  constructor(private restangular: Restangular) {}

  getUsers(): Observable<User[]> {
    return this.restangular.all('users').getList();
  }

  getUser(id: number): Observable<User>{
    console.log(this.restangular.one('users', id).get());
    return this.restangular.one('users', id).get();
  }

  addUser(user: User): Observable<User>{
    return this.restangular.all('users').post(user);
  }

  updateUser(user: User): Observable<User>{
    return this.restangular.one('users', user.id).customPUT(user);
  }

  deleteUser(user: User): Observable<User>{
    return this.restangular.one('users', user.id).remove();
  }
}
