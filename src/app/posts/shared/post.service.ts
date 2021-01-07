import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  API_URL = "http://127.0.0.1:3000/";

  getPosts() {
    return this.http.get(`${this.API_URL}posts`);
  }
  createPost(newPost) {
    return this.http.post(`${this.API_URL}posts`, newPost);
  }
}
