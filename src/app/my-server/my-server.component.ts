import { Component, OnInit } from '@angular/core';
import { MyServerService} from './myServer-service';
import {randomInteger} from '../services/myHelperFunction';

interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-my-server',
  templateUrl: './my-server.component.html',
  styleUrls: ['./my-server.component.css']
})


export class MyServerComponent implements OnInit {
  cars: Cars[];
  colorsCars = ['blue', 'grey', 'gold', 'silver', 'green'];
  carName = '';
  title = '';
  constructor(private myServerService: MyServerService) { }

  loadCars() {
    this.myServerService.getCars().subscribe(
      (cars: Cars[]) => this.cars = cars,
      err => console.log(err),
      () => console.log('complete')
    );
  }

  addCar() {
    const rang = randomInteger(0, this.colorsCars.length);
    console.log(rang);
    this.myServerService.addCar(this.carName, this.colorsCars[rang]).subscribe();
    this.carName = '';
  }

  changeColor(el: Cars) {
    const rang = randomInteger(0, this.colorsCars.length);
    this.myServerService.newColor(el, this.colorsCars[rang]).subscribe(() => {
    });
  }

  delCar(el: Cars) {
    this.myServerService.delCarFromServer(el).subscribe((cars: Cars[]) => {
      this.cars = this.cars.filter((element) => {
        return element['id'] !== el['id'];
      });
    });
  }

  ngOnInit() {
    this.myServerService.getTitle().subscribe(
      (data) => this.title = data['text']
    );
  }

}
