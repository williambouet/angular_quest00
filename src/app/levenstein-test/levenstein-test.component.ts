import { Component, OnInit } from '@angular/core';
import { LevensteinService } from '../service/levenstein.service';

@Component({
  selector: 'app-levenstein-test',
  templateUrl: './levenstein-test.component.html',
  styleUrls: ['./levenstein-test.component.css']
})
export class LevensteinTestComponent implements OnInit {

  constructor(private distanceLevenstein: LevensteinService) { }

  ngOnInit() {
console.log(this.distanceLevenstein.calculate("abcdef", "abdcde"))

  }

}
