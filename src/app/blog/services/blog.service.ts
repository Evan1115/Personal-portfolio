import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Blog } from '../model/blog';

const url = 'https://dev.to/api/articles?username=evan1115'

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getAllPost(){
    return this.http.get<Blog[]>(url)
  }
}
