import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';

import { BsModalRef } from 'ngx-bootstrap';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user: User;
  context: UsersComponent;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
