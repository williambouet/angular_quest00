import { Directive, Input, TemplateRef, ViewContainerRef  } from '@angular/core';

@Directive({
  selector: '[appDisplayMovie]'
})
export class DisplayMovieDirective {
  
  constructor(private tplRef: TemplateRef<any>, private vwRef: ViewContainerRef) { }

  @Input() set appDisplayMovie(condition: boolean) {
    
    condition ? this.vwRef.createEmbeddedView(this.tplRef) : this.vwRef.clear();
}

}
