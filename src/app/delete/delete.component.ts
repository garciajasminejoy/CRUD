import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService} from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';

import { User } from '../user';
import { UserService } from '../user.service';
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

  constructor(private modalService: BsModalService,
              public modalRef: BsModalRef,
              private userService: UserService) { }

  ngOnInit() {
  }

  decline(): void{
    this.modalRef.hide();
  }

}
