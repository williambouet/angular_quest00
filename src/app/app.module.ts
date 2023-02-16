import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router'; 
import { ROUTES } from './app-routes';

import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { CardComponent } from './card/card.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ButtonComponent } from './button/button.component';
import { MovieComponent } from './movie/movie.component';

import { HightLightDirective } from './directive/hightLight.directive';
import { DisplayGuestsDirective } from './directive/displayGuests.directive';
import { ChangeMovieDirective } from './directive/changeMovie.directive';
import { DisplayMovieDirective } from './directive/displayMovie.directive';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [		
    AppComponent,
    SquareComponent,
    CalculatriceComponent,
    IngredientComponent,
    ButtonComponent,
    HightLightDirective,
    DisplayGuestsDirective,
    MovieComponent,
    ChangeMovieDirective,
    DisplayMovieDirective, 
    CardComponent,
      NavbarComponent
   ],
  imports: [BrowserModule, AppRoutingModule,
    FormsModule, FormsModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
  
export class AppModule {}
