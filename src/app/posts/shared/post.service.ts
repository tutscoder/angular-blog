import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  // API_URL = "http://127.0.0.1:3000/";
  API_URL = "/api/v1/";
  //API_URL = "https://nodeblog-api.herokuapp.com/api/v1/";

  getPosts(reqData?) {
    let params = new HttpParams();

    params = params.append("limit", reqData.limit);
    params = params.append("page", reqData.page);
   
    return this.http.get(`${this.API_URL}posts`, { params: params });
  }
  getAllPosts(reqData?) {
    let query = "";
    if (reqData && reqData.limit) {
      query = `limit=${reqData.limit}`;
    }
    return this.http.get(`${this.API_URL}posts/admin/all?${query}`);
  }
  createPost(newPost) {
    return this.http.post(`${this.API_URL}posts`, newPost);
  }
  getPostById(postId) {
    return this.http.get(`${this.API_URL}posts/${postId}`);
  }
  getPostBySlug(slug) {
    return this.http.get(`${this.API_URL}posts/post/${slug}`);
  }
  updatePost(postId: string, postData: any) {
    return this.http.patch(`${this.API_URL}posts/${postId}`, postData);
  }
  updatePostStatus(postId: string, postData: any) {
    return this.http.patch(
      `${this.API_URL}posts/update_status/${postId}`,
      postData
    );
  }
  deletePost(postId) {
    return this.http.delete(`${this.API_URL}posts/${postId}`);
  }
}
