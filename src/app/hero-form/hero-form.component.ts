import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  powers = [
    'Faire le mort',
    'Sentir des pieds',
    'Avoir les mains moites',
    'Voir à 90°',
    'Être tout le temps malade',
  ];

  model: Hero = new Hero(1, "StrabismVarius", this.powers[-1]);
  submitted = false;
  
  constructor() { }

  ngOnInit() {
  }


  onSubmit() {
    this.submitted = true;
    alert("formulaire validé : " + this.model.power);
  }

}
