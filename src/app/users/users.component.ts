import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { clone, find } from 'lodash';

import { UserService } from '../user.service';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';

import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  bsModalRef: BsModalRef;
  users: User[];

  constructor(private userService: UserService,
              private modalService: BsModalService) { }

  public openModalWithComponent() {
    this.bsModalRef = this.modalService.show(AddComponent);
    this.bsModalRef.content.users = this.users;
  }

  public openEditModal(user) {
    this.bsModalRef = this.modalService.show(EditComponent);
    this.bsModalRef.content.users = this.users;
    this.bsModalRef.content.user = clone(user);
    this.bsModalRef.content.context = this;
  }

  public openDeleteWarningModal(user) {
    this.bsModalRef = this.modalService.show(DeleteComponent);
    this.bsModalRef.content.user = user;
    this.bsModalRef.content.users = this.users;
    this.bsModalRef.content.context = this;
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void{
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }


  update(user): void {
    this.userService.updateUser(user)
        .subscribe(u => {
          console.log('UPDATED', u);
          const $user = find(this.users, {id: u.id});
          console.log('OLD ', $user);
          Object.assign($user, u);
          console.log($user);
          this.bsModalRef.hide();
        });
  }
}
