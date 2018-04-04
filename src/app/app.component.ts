import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BackendApiService} from './backend-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';



  constructor(private router: Router, private route: ActivatedRoute, private controlPage: BackendApiService) { }

  ngOnInit() { }

  openCarPage() {
    this.router.navigate(['/cars'], {relativeTo: this.route});
  }

}
