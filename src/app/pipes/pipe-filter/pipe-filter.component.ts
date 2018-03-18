import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-filter',
  templateUrl: './pipe-filter.component.html',
  styleUrls: ['./pipe-filter.component.css']
})
export class PipeFilterComponent implements OnInit {

  searchCar:string = '';
  cars = [
    {name: 'Ford', descr: 'WFM 1'},
    {name: 'renault', descr: 'WFM 2'},
    {name: 'daewoo', descr: 'WFM 3'},
    {name: 'BMW', descr: 'WFM 4'},
    {name: 'opel', descr: 'WFM 5'},
    {name: 'skoda', descr: 'WFM 6'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
