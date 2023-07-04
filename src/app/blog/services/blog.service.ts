import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

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

interface Blog {
  id: string;
  title: string;
  published_timestamp: string;
  tags?: string[];
  cover_image?: string
}
