import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';

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
  public user;
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
    console.log('edit modal: ', user);
    this.bsModalRef.content.user = user;
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

  confirm(user: User): void{
    this.userService.deleteUser(user).subscribe(_user => {
      this.users = this.users.filter(u => u !== user);
      this.bsModalRef.hide();
    });
  }

}
