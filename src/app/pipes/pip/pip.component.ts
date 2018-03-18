import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pip',
  templateUrl: './pip.component.html',
  styleUrls: ['./pip.component.css']
})
export class PipComponent implements OnInit {
  name = 'Miron';
  pi = Math.PI;
  money = 350;
  data = new Date();
  amout = 0.45;
  object = {
    foo: 'bar',
    baz: 'quz',
    nested : {
      xyz: 3,
      numbers: [10, 5, 20]
    }
  };


  constructor() { }

  ngOnInit() {
  }

}
