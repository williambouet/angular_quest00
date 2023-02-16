import { Directive, Input, TemplateRef, ViewContainerRef  } from '@angular/core';

@Directive({
  selector: '[appDisplayPromo]'
})
export class DisplayPromoDirective {

  
  @Input() set appDisplayPromo(condition: boolean) {
    
    condition ? this.vwRef.createEmbeddedView(this.tplRef) : this.vwRef.clear();
    
  }
  
  constructor(private tplRef: TemplateRef<any>, private vwRef: ViewContainerRef ) { }
}
