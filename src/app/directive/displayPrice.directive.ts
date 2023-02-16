import { Directive, Input, TemplateRef, ViewContainerRef  } from '@angular/core';

@Directive({
  selector: '[appDisplayPrice]'
})
export class DisplayPriceDirective {

  @Input() set appDisplayPrice(condition: boolean) {
    
    condition ? this.vwRef.createEmbeddedView(this.tplRef) : this.vwRef.clear();
    
  }
  
  constructor(private tplRef: TemplateRef<any>, private vwRef: ViewContainerRef ) { }
}
