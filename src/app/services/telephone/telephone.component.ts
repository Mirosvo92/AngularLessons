import {Component, Input, OnInit} from '@angular/core';
import {ConsoleService} from '../console.service';

@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.css'],
  providers: [ConsoleService]
})
export class TelephoneComponent implements OnInit {
  @Input() telephone;
  constructor(private consoleService: ConsoleService) { }
  // method
  triggerButtons(type: string) {
    this.telephone.isSold = type === 'buy' ? true : false;
    // const servise = new ConsoleService();it is right variant
    this.consoleService.log(`${this.telephone.name} status ${type}`);
  }
  ngOnInit() {
  }

}
