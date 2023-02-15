import { Directive, Renderer2,ElementRef, OnInit,  HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective implements OnInit {

  @HostBinding('style.backgroundColor') myBackgroundColor!: string;
  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow') ;
  }
  
/**    @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
      this.myBackgroundColor ='yellow';
    }
    @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
      this.myBackgroundColor ='transparent';
    }
 */
}
