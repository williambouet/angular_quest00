import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-onomatope-form',
  templateUrl: './onomatope-form.component.html',
  styleUrls: ['./onomatope-form.component.css']
})
export class OnomatopeFormComponent implements OnInit {
  public onomatopes:string[] =['']
    
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    alert();
  }

  onReceiveListOnomatope(event: string[]): void {
    this.onomatopes= event;
  }


}
