import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/models/post';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-info-ajax',
  templateUrl: './info-ajax.component.html',
  styleUrls: ['./info-ajax.component.css']
})
export class InfoAjaxComponent implements OnInit {

  posts: Observable<Post[]>;

  constructor(
    private ps: PostsService,
  ) { }

  ngOnInit(): void {
    this.posts = this.ps.list('sunt');
  }

}
