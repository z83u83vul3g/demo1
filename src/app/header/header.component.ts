import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  siteName = 'Hello, World';
  subTitle = 'will will';

  constructor() { }

  ngOnInit(): void {
  }

  changeName(event: MouseEvent){
    console.log(event);
    if(event.shiftKey){
      this.siteName = 'The Will Will Web';
    }
  }
}
