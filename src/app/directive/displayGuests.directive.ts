import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDisplayGuests]'
})
export class DisplayGuestsDirective {

  @Input() set appDisplayGuests(condition: boolean) {
   
    condition ? this.vwRef.createEmbeddedView(this.tplRef) : this.vwRef.clear();

  }
  constructor(private tplRef: TemplateRef<any>, private vwRef: ViewContainerRef) { }

}
