import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

import { User } from '../user';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  user: User;
  users: User[];
  public context: UsersComponent;
  public delete: Function;

  constructor(public modalRef: BsModalRef) { }

  ngOnInit() {
  }

  decline(): void{
    this.modalRef.hide();
  }

}
