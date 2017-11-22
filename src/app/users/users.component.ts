import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';

import { UserService } from '../user.service';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';

import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public user;
  bsModalRef: BsModalRef;
  users: User[];

  constructor(private userService: UserService,
              private modalService: BsModalService) { }

  public openModalWithComponent() {
    this.bsModalRef = this.modalService.show(AddComponent);
  }
  public openEditModal(user) {
    this.bsModalRef = this.modalService.show(EditComponent);
    console.log('edit modal: ', user);
    this.bsModalRef.content.user = user;
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



}
