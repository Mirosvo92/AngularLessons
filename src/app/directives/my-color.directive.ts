import {Directive, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyColor]'
})
export class MyColorDirective {
  @HostBinding('style.color') color: string;
  @Input() defaultBackGroundColor = 'grey';
  @Input() hoverBackGroundColor = '#ffd';
  constructor(private renderer: Renderer2) { }
  @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
    this.color = this.hoverBackGroundColor;
  }

  @HostListener('mouseleave', ['$event']) mouseLeave(event: Event) {
    this.color = this.defaultBackGroundColor;
  }

}
