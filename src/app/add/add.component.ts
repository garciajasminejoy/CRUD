import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

import { User } from '../user';
import { Address } from '../address';
import { Geo } from '../geo';
import { Company } from '../company';

import { UserService } from '../user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  users: User[];
  user: User;
  constructor(public bsModalRef: BsModalRef,
              private userService: UserService) {}

  ngOnInit() {
    this.user = new User();
    this.user.address = new Address();
    this.user.company = new Company();
    this.user.address.geo = new Geo();
  }

  add(user): void{
    this.userService.addUser(user)
        .subscribe(($user) => {
          this.user.id = $user.id;
          this.users.push(this.user);
        });
    this.bsModalRef.hide();
  }
}
