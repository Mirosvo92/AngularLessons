import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {
  nameCar: string;
  yearCar: number;
  @Output() onAddCar = new EventEmitter<{name: string, year: number}>();
  canAddCar = false;

  constructor() {
    // new
    setTimeout( () => {
      this.canAddCar = true;
    }, 4000 );
    // new END
  }

  ngOnInit() {
  }

  addToArrCar(car: { name: string, year: number }) {
    this.onAddCar.emit({
      name: this.nameCar,
      year: this.yearCar
    });
  }

}
