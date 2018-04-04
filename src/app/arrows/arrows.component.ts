import {Component, Input, OnInit} from '@angular/core';
import {BackendApiService} from '../backend-api.service';

@Component({
  selector: 'app-arrows',
  templateUrl: './arrows.component.html',
  styleUrls: ['./arrows.component.css']
})
export class ArrowsComponent implements OnInit {

  activePrevPage: boolean;

  constructor(private controlPage: BackendApiService) {
    console.log('this is constructor');
  }

  ngOnInit() {
    console.log('this arrows');
    this.controlPage.init();
    this.activePrevPage = this.controlPage.activePrevPage;
  }

  prevPage() {
    this.controlPage.prevPage();
    console.log(this.activePrevPage);
  }

  nextPage() {
    this.controlPage.nextPage();
    console.log(this.activePrevPage);
  }

}
