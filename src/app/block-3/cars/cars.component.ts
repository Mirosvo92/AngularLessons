import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  carList: [{ name: string, year: number }] = [
    {name: 'Ford', year: 2015},
    {name: 'BMW', year: 2012}
  ];
  // one way binding (new)
  valueOfInput = '';
  valueOfInput2 = '';
  ngModelInputText = '';
  testValue = '';
  derectivesInput = '';
  items = ['Apple iPhone 7', 'Huawei Mate 9', 'Samsung Galaxy S7', 'Motorola Moto Z'];
  dates = [
    new Date(2015, 3, 4),
    new Date(2011, 5, 7),
    new Date(2005, 8, 9),
    new Date(2008, 12, 5)
  ];
  @ViewChild('testView') testView: ElementRef;
  // one way binding (new) END
  constructor() { }
  ngOnInit() {}
  updateCarList(car: {name: string, year: number}) {
    this.carList.push(car);
  }
  // one way binding (new)
  keyUpDown(event: Event) {
    this.valueOfInput = (<HTMLInputElement>event.target).value;
  }
  keyUpDown2(el: HTMLInputElement) {
    this.valueOfInput2 = el.value;
  }
  testViewFun(){
    this.testValue = this.testView.nativeElement.value;
  }
  setBigText(item: string) {
    return item.length > 14 ? true : false;
  }
  // one way binding (new) END

}
