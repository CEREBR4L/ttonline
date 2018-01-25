import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Tuesday Temptation';
  tagLine = 'A love affair with contrast';

  constructor() { }

  ngOnInit() {
  }

}
