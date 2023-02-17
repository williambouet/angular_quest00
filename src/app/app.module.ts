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
import { CatalogComponent } from './catalog/catalog.component';
import { DisplayPromoDirective } from './directive/displayPromo.directive';
import { DisplayPriceDirective } from './directive/displayPrice.directive';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';

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
    DisplayPromoDirective,
    DisplayPriceDirective,
    CardComponent,
    NavbarComponent,
    CatalogComponent,
    HeroFormComponent,
      SignUpComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
