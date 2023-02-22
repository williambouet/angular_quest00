import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-atelier-button',
  templateUrl: './atelier-button.component.html',
  styleUrls: ['./atelier-button.component.css'],
})
export class AtelierButtonComponent implements OnInit {
  @Input()
  class: string | string[] | Set<string> | { [klass: string]: any } = '';

  @Input()
  style: { [prop: string]: any } = {};

  @Output()
  buttonText: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  sendToParent() {
    this.buttonText.emit('Le bouton a été cliqué ');
  }
}
