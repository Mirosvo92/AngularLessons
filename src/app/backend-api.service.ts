import {Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

function setIndexNextPage() {
  // get this page url
  this.namePage = this.router.url;
  // next page index
  this.indexPage = this.pages.indexOf(this.namePage) + 1;
  // if last page
  if (this.indexPage === this.pages.length) {
    this.indexPage = 0;
  }

}

function isActivePrevButton() {
  if (this.indexPage === 1) {
    console.log('isActivePrevButton NUMBER' + this.indexPage + 'NOW');
    this.activePrevPage = false;
  } else {
    this.activePrevPage = true;
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
  activePrevPage = true;

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
    }, 10);
    setTimeout(() => {
      this.activePrevPage = false;
    }, 5000);
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
