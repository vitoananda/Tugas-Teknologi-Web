import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts?: any[];
 
  private url = 'http://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { 
    http.get<any[]>(this.url)
    .subscribe(response => {
      this.posts = [response]
    })
  }
  
  createPost(input: HTMLInputElement){
    let post = { id: null, title: input.value }
    input.value = '';

    this.http.post<any>(this.url, JSON.stringify(post))
    .subscribe(response => {
      post['id'] = response.id;
      this.posts?.splice(0,0,post);
    });
  }

  updatePost(post: { id: { JSON: { stringify: (arg0: { isRead: boolean; }) => string; }; }; }){
    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead:true }))
    .subscribe(response =>{
      console.log(response);
    })
  }

  deletePost(post: { id: string; }){
    this.http.delete<any>(this.url + '/' + post.id)
    .subscribe(response =>{
      let index = this.posts?.indexOf(post);
      this.posts?.splice(index!, 1);

    })
  }

  ngOnInit(): void {
  }

}
