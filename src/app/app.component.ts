/* eslint-disable max-len */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo1';
  data = {
    keyword: 'demo123'
  };

  articleDatas: any[];

  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit(): void {
    this.http.get<any[]>('/api/articles.json',).subscribe(results => {
      this.articleDatas = results;
    });
  }

  doSearch(value: string, elm?: HTMLInputElement) {
    this.data.keyword = value;
    if (elm && !value) {
      elm.value = '';
    }
  }

}
