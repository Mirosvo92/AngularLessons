import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {

  @HostBinding('style.backgroundColor') background: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'blue' );
    // this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'red' );
    this.background = 'green';
  }

  @HostListener('mouseleave', ['$event']) mouseLeave(event: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'blue' );
    this.background = 'transparent';
  }

}
