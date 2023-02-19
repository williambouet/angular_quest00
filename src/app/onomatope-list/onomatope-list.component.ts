import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-onomatope-list',
  templateUrl: './onomatope-list.component.html',
  styleUrls: ['./onomatope-list.component.css'],
})
export class OnomatopeListComponent implements OnInit {
  public onomatopeList: string[] = ['Tsss tsss tsss', 'Pan', 'Vlam', 'Rrrrrr'];

  constructor() {}

  
  ngOnInit() {}
  
  @Output()
  newOnomatopeList: EventEmitter<string[]> = new EventEmitter();


  onReceiveNewOnomatope(event: string): void {
    this.onomatopeList.push(event);
    this.newOnomatopeList.emit(this.onomatopeList);
     }
     
}
