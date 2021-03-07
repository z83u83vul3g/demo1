import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  siteName = 'Hello, World';
  subTitle = 'will will';

  counter = 10;

  constructor() { }

  ngOnInit(): void {
  }

  changeName(event: MouseEvent){
    console.log(event);
    if(event.shiftKey){
      this.siteName = 'The Will Will Web';
    }
  }

  changeFontSize(){
    this.counter++;
  }
}
