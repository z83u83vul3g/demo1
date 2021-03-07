/* eslint-disable max-len */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

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

  data$: Observable<any[]>;

  pageCountStart = 0;
  pageCountEnd = 3;

  constructor(
    private dataSvc: DataService
  ) {
  }

  ngOnInit(): void {
      this.data$ = this.dataSvc.loadArticles();
  }

  doSearch(value: string, elm?: HTMLInputElement) {
    this.data.keyword = value;
    if (elm && !value) {
      elm.value = '';
    }
  }

}

