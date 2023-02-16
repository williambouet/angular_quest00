import {  Directive, Renderer2, ElementRef, OnInit,  HostListener, HostBinding  } from '@angular/core';

@Directive({
  selector: '[appChangeMovie]'
})
export class ChangeMovieDirective implements OnInit {
  
  constructor(private renderer: Renderer2, private elRef: ElementRef) { }
  @HostBinding('style.backgroundColor') myBackgroundColor!: string;
  
  @HostListener('mouseenter') addClass = (eventData: Event) => {
    this.elRef.nativeElement.querySelector('li')
    .classList.add('fs-5');
  }

  @HostListener('mouseleave') removeClass = (eventData: Event) => {
    this.elRef.nativeElement.querySelector('li')
    .classList.remove('fs-5');
  }

  ngOnInit() { }

}
