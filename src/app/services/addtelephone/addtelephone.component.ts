import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TelephonesService} from '../telephones.servise';

@Component({
  selector: 'app-addtelephone',
  templateUrl: './addtelephone.component.html',
  styleUrls: ['./addtelephone.component.css']
})
export class AddtelephoneComponent implements OnInit {
  nameTelephone: string;
  // @Output() onAddTelephone = new EventEmitter<{name: string}>();

  constructor(private service: TelephonesService) { }

  ngOnInit() {
  }

  updateAllList() {
    // this.onAddTelephone.emit({
    //   name: this.nameTelephone
    // });
    this.service.addTelephone(this.nameTelephone);
  }

}
