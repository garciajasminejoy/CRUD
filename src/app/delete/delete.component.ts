import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

import { User } from '../user';
import { UsersComponent } from '../users/users.component';

import { findIndex } from 'lodash';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  user: User;
  users: User[];
  public context: UsersComponent;
  // public delete: Function;

  constructor(public modalRef: BsModalRef,
              private userService: UserService) { }

  ngOnInit() {
  }

  delete(user: User): void {
    const index = findIndex(this.users, {id: user.id});
    this.users.splice(index, 1);
    this.userService.deleteUser(user).subscribe();
    this.modalRef.hide();
  }

  decline(): void{
    this.modalRef.hide();
  }

}
