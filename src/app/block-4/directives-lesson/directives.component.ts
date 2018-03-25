import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  title = 'Создание своей директивы'
  myNumbers = [1, 2, 3, 4];
  current = 1;
  constructor() { }

  ngOnInit() {
  }
  onClick(num){
    this.current = num;
  }

}
