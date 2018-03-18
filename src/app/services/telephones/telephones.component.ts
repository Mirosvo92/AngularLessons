import {Component, OnInit} from '@angular/core';
import {TelephonesService} from '../telephones.servise';

@Component({
  selector: 'app-telephones',
  templateUrl: './telephones.component.html',
  styleUrls: ['./telephones.component.css']
})
export class TelephonesComponent implements OnInit {

  telephones = [];

  constructor(private service: TelephonesService) { }

  ngOnInit() {
    this.telephones = this.service.telephones;
  }
  // updateTelephoneList(telephone: {name: string, isSold: boolean }) {
  //   this.service.addTelephone(telephone);
  // }



}
