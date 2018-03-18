import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }
  @Input() carItem: {name: string, year: number};
  @ContentChild('contChild') contChild: ElementRef;

  // ngAfterViewInit(){
  //   console.log(this.contChild);
  // }

  ngOnInit() {
  }

}
