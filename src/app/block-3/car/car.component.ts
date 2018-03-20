import {AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit, AfterViewInit {

  @Input() carItem: {name: string, year: number};
  @ContentChild('contChild') contChildsd: ElementRef;
  constructor() {
  }

  ngAfterViewInit() {
    console.log(this.contChildsd.nativeElement.innerHTML);
  }

  ngOnInit() {

  }

}
