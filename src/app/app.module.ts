import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { ChildComponentComponent } from './cp-child-component/child-component.component';
import { ParentComponentComponent } from './cp-parent-component/parent-component.component';
import { DevelopperComponent } from './developper/developper.component';
import { SkillComponent } from './developper-skill/skill.component';
import { OnomatopeFormComponent } from './onomatope-form/onomatope-form.component';
import { OnomatopeListComponent } from './onomatope-list/onomatope-list.component';
import { CreateOnomatopeComponent } from './onomatope-create/create-onomatope.component';
import { KittenFormComponent } from './kitten-form/kitten-form.component';
import { KittenAsideComponent } from './kitten-aside/kitten-aside.component';
import { KittenListComponent } from './kitten-list/kitten-list.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';

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
    SignUpComponent,
    ReactiveFormComponent,
    SearchMovieComponent,
    ChildComponentComponent,
    ParentComponentComponent,
    DevelopperComponent,
    SkillComponent,
    OnomatopeFormComponent,
    OnomatopeListComponent,
    CreateOnomatopeComponent,
      KittenFormComponent,
      KittenAsideComponent,
      KittenListComponent,
      CocktailListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
