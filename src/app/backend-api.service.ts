import {Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

function setIndexNextPage() {
  // get this page url
  this.namePage = this.router.url;
  console.log('url ' + this.namePage);
  // next page index
  this.indexPage = this.pages.indexOf(this.namePage) + 1;
  // if last page
  if (this.indexPage === this.pages.length) {
    this.indexPage = 0;
  }
  if (this.indexPage === 0) {
    this.activePrevPage = true;
    console.log('asd');
  } else {
    this.activePrevPage = false;
  }
}

function setIndexPrevPage() {
  // get this page url
  this.namePage = this.router.url;
  // next page index
  this.indexPage = this.pages.indexOf(this.namePage) - 1;
  // if first page
  if (this.indexPage === -1) {
    this.indexPage = this.pages.length - 1;
  }
}

@Injectable()
export class BackendApiService {

  pages = [];
  namePage: string;
  indexPage: number;
  activePrevPage: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.config.forEach((item) => {
      if (item.path.indexOf('/') === -1) {
        this.pages.push('/' + item.path);
      }
    });
    this.pages.unshift('/');
  }

  init() {
    setTimeout(() => {
      setIndexNextPage.call(this);
    }, 0);
  }

  prevPage() {
    setIndexPrevPage.call(this);
    this.router.navigate([this.pages[this.indexPage] ], {relativeTo: this.route});
  }

  nextPage() {
    setIndexNextPage.call(this);
    this.router.navigate([this.pages[this.indexPage] ], {relativeTo: this.route});
  }



}
