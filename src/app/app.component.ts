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

  ngOnInit(): void {
  }

  doSearch(value: string, elm?: HTMLInputElement){
    this.data.keyword = value;
    if(elm && !value){
      elm.value = '';
    }
  }

}
