import {Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

function test() {
  this.namePage = this.router.url;

  this.indexPage = this.pages.indexOf(this.namePage) + 1;
  if (this.indexPage === this.pages.length - 1) {
    this.indexPage = 0;
  }
  // if (this.indexPage - 1 === 0) {
  //   this.activrPrevPage = true;
  //   console.log('ye');
  // } else {
  //   this.activrPrevPage = false;
  // }
}

@Injectable()
export class BackendApiService {

  pages = [];
  namePage: string;
  indexPage: number;
  // activrPrevPage = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.config.forEach((item) => {
      if (item.path.indexOf('/') === -1) {
        this.pages.push('/' + item.path);
      }
    });
    this.pages.unshift('/');
  }

  init() {
    // setTimeout(() => {
      test.call(this);
    // }, 0);
    console.log(this.pages);
  }


  nextPage() {
    test.call(this);
    this.router.navigate([this.pages[this.indexPage] ], {relativeTo: this.route});
    setTimeout(() => {
      test.call(this);
    }, 0);
  }



}
