import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../model/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  
  constructor() { }

  @Input()
  skill: Skill = new Skill('','','');

  ngOnInit() {
  }

}
