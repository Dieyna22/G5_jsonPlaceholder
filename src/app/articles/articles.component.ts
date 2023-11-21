import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../service/article-service.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent  implements OnInit {

  recupArticle: any;
  constructor(private articlesService: ArticleServiceService) {}
  
  searchArticle = '';
  itemSearch: any;
  
  ngOnInit() {
    this.itemSearch = this.recupArticle;
    this.articlesService.getArticles().subscribe((articles: any) => {
      this.recupArticle = articles;
    })
}
 
  articleFound() {
    this.itemSearch = this.recupArticle.filter(
      (item: any) => (item?.title.toLowerCase().includes(this.searchArticle.toLowerCase())));
  }

}
