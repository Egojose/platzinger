import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    let c = 1;
    let b = '2';
    console.log(c + b);
  }

  ngOnInit() {
  }

}
