import { Component, OnInit } from '@angular/core';
import { Developper } from '../model/developper';
import { Skill } from '../model/skill';

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css'],
})
export class DevelopperComponent implements OnInit {
  developper: Developper;
  php: Skill;
  symfony: Skill;

  constructor() { 
    this.php = new Skill(
      'PHP',
      'https://w7.pngwing.com/pngs/751/3/png-transparent-logo-php-html-others-text-trademark-logo-thumbnail.png',
      'https://www.php.net/manual/fr/intro-whatis.php',
    );

    this.symfony = new Skill(
      'Symfony',
      'https://symfony.com/logos/symfony_black_03.png',
      'https://symfony.com/',
    );


    this.developper = new Developper(
      'Iam',
      'Will',
      42,
      'Male',
      'Expect to be a good developper, and work for',
      [this.php, this.symfony]
    )

  }

  ngOnInit() {}
}
