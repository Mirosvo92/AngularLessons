import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AppComponent} from '../app.component';



@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {

  id: string;
  name: string;
  activePrevPage = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // for (let i = 0; i < this.router.config.length; i++) {
    //   const routePath: string = this.router.config[i].path;
    //   console.log(routePath);
    // }
    this.id = this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
    // для реактивного получения данных
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.name = params['name'];
    });
  }

  nextCar() {

  }

}
