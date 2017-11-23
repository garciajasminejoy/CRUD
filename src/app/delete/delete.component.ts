import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService} from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  delete: boolean;
  user: User;
  users: User[];

  constructor(private modalService: BsModalService,
              public modalRef: BsModalRef,
              private userService: UserService) { }

  ngOnInit() {

  }

  confirm(user: User): void{
    this.userService.deleteUser(user).subscribe(_user => {
      this.modalRef.hide();
    });
  }

  decline(): void{
    this.modalRef.hide();
  }


}
