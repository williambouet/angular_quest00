
import { Component, OnInit } from '@angular/core';
import { NasaApi } from '../model/nasa-api';
import { NasaService } from '../service/nasa.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {
  public imgOfTheDay?: NasaApi;

  constructor(public nasaService: NasaService) {}
  
  ngOnInit() {
    this.nasaService.getImageOfTheDay().subscribe(imgOfTheDayFromNasaService => {
      this.imgOfTheDay = imgOfTheDayFromNasaService;
    });
  }

}
