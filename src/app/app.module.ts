import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';

import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ButtonComponent } from './button/button.component';
import { HightLightDirective } from './directive/hightLight.directive';
import { DisplayGuestsDirective } from './directive/displayGuests.directive';
import { MovieComponent } from './movie/movie.component';
import { ChangeMovieDirective } from './directive/changeMovie.directive';
import { DisplayMovieDirective } from './directive/displayMovie.directive';


@NgModule({
  declarations: [	
    AppComponent,
    SquareComponent,
    IngredientComponent,
    ButtonComponent,
    HightLightDirective,
    DisplayGuestsDirective,
    MovieComponent,
    ChangeMovieDirective,
    DisplayMovieDirective
   ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
