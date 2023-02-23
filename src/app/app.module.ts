import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { Routes } from '@angular/router';
import { ROUTES } from './app-routes';

import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { CardComponent } from './card/card.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ButtonComponent } from './button/button.component';
import { MovieComponent } from './movie/movie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CatalogComponent } from './catalog/catalog.component';
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
import { CocktailJsonComponent } from './cocktail-json/cocktail-json.component';

import { DisplayPromoDirective } from './directive/displayPromo.directive';
import { DisplayPriceDirective } from './directive/displayPrice.directive';
import { HightLightDirective } from './directive/hightLight.directive';
import { DisplayGuestsDirective } from './directive/displayGuests.directive';
import { ChangeMovieDirective } from './directive/changeMovie.directive';
import { DisplayMovieDirective } from './directive/displayMovie.directive';
import { LoginFormComponent } from './loginForm/loginForm.component';
import { NasaComponent } from './nasa/nasa.component';
import { AtelierButtonComponent } from './atelier-button/atelier-button.component';
import { AtelierButtonParentComponent } from './atelier-button-parent/atelier-button-parent.component';
import { PokedexPageComponent } from './pokedex/pages/pokedex-page/pokedex-page.component';
import { CreatePokemonComponent } from './pokedex/pages/create-pokemon/create-pokemon.component';
import { PokemonDetailsComponent } from './pokedex/components/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pokedex/components/pokemon-list/pokemon-list.component';

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
    CocktailListComponent,
    LoginFormComponent,
    CocktailJsonComponent,
    NasaComponent,
    AtelierButtonComponent,
    AtelierButtonParentComponent,
    PokedexPageComponent,
    CreatePokemonComponent,
    PokemonDetailsComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
