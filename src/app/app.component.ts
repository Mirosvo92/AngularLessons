import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {BackendApiService} from './backend-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  activrPrevPage = false;


  constructor(private router: Router, private route: ActivatedRoute, private controlPage: BackendApiService) { }

  ngOnInit() {
    this.controlPage.init();
  }

  openCarPage() {
    this.router.navigate(['/cars'], {relativeTo: this.route});
  }

  prevPage() {

  }

  nexPage() {
    this.controlPage.nextPage();
  }



}
