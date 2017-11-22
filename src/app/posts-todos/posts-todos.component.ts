import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-todos',
  templateUrl: './posts-todos.component.html',
  styleUrls: ['./posts-todos.component.css']
})
export class PostsTodosComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }


}
