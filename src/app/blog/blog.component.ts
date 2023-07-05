import { Component, OnInit } from '@angular/core';
import { BlogService } from './services/blog.service';
import { Observable, of } from 'rxjs';
import { Blog } from './model/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: Observable<Blog[]> = new Observable<Blog[]>();

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getAllPost();
  }

  directToNewPage(postLink: string): void {
    window.open(postLink, "_blank");
  }
}
