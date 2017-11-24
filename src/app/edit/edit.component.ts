import { Component, Input, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';

import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user: User;
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              public bsModalRef: BsModalRef) { }

  ngOnInit() {
    console.log(this.user);
  }

  update(user): void{
    this.userService.updateUser(user)
      .subscribe();
  }
}
