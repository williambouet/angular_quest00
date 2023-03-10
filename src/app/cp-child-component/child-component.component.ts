import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {
  constructor() {}

  @Input()
  startCooking: boolean = false;

  @Input()
  numberOfCookies: number = 0;

  @Input()
  flour: number = 0;

  @Input()
  salt: number = 0;

  @Input()
  sugar: number = 0;

  @Input()
  egg: number = 0;

  @Output()
  cookies: EventEmitter<number> = new EventEmitter();

  sendCookies(): void {
    this.cookies.emit(this.numberOfCookies);
  }

  ngOnInit() {}
}
