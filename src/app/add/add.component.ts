import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  public user: User;

  constructor(public bsModalRef: BsModalRef,
              private userService: UserService) {}

  ngOnInit() {
  }
}
