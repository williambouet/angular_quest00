import { Component, Input, OnInit, Output } from '@angular/core';
import { Kitten } from '../model/kitten';

@Component({
  selector: 'app-kitten-aside',
  templateUrl: './kitten-aside.component.html',
  styleUrls: ['./kitten-aside.component.css']
})
export class KittenAsideComponent implements OnInit {

  @Input()
  public kittenAdopted?: Kitten[] = [];
  
  constructor() { 

  }

  ngOnInit() {
  
  }


}
