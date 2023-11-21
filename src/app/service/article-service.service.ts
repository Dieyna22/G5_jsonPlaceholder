import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  constructor(private http: HttpClient) { }
  getArticles() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
