import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ButtonComponent } from './button/button.component';
import { HightLightDirective } from './hightLight.directive';
import { DisplayGuestsDirective } from './displayGuests.directive';
import { MovieComponent } from './movie/movie.component';


@NgModule({
  declarations: [	
    AppComponent,
    SquareComponent,
    IngredientComponent,
    ButtonComponent,
    HightLightDirective,
    DisplayGuestsDirective,
      MovieComponent
   ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
