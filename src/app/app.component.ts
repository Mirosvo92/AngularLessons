import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BackendApiService} from './backend-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  activePrevPage: boolean;


  constructor(private router: Router, private route: ActivatedRoute, private controlPage: BackendApiService) { }

  ngOnInit() {
    console.log('this app');
    this.controlPage.init();
    this.activePrevPage = this.controlPage.activePrevPage;
  }

  openCarPage() {
    this.router.navigate(['/cars'], {relativeTo: this.route});
  }

  prevPage() {
    this.controlPage.prevPage();
    this.activePrevPage = this.controlPage.activePrevPage;
  }

  nextPage() {
    this.controlPage.nextPage();
    this.activePrevPage = this.controlPage.activePrevPage;
  }


}
