import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { MovieComponent } from './movie/movie.component';
import { SquareComponent } from './square/square.component';
import { ButtonComponent } from './button/button.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { ParentComponentComponent } from './cp-parent-component/parent-component.component';
import { DevelopperComponent } from './developper/developper.component';
import { OnomatopeFormComponent } from './onomatope-form/onomatope-form.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { LoginFormComponent } from './loginForm/loginForm.component';
import { CocktailJsonComponent } from './cocktail-json/cocktail-json.component';
import { NasaComponent } from './nasa/nasa.component';
import { KittenListComponent } from './kitten-list/kitten-list.component';
import { AtelierButtonParentComponent } from './atelier-button-parent/atelier-button-parent.component';
import { PokedexPageComponent } from './pokedex/pages/pokedex-page/pokedex-page.component';
import { CreatePokemonComponent } from './pokedex/pages/create-pokemon/create-pokemon.component';
import { AtelierPokemonListComponent } from './atelier-pokemon-list/atelier-pokemon-list.component';
import { LevenshteinTestComponent } from './levenshtein-test/levenshtein-test.component';
import { UserComponent } from './user/user.component';

const ROUTES: Routes = [
  { path: 'fiche', component: CardComponent },
  { path: 'calculatrice', component: CalculatriceComponent },
  { path: 'ingrédient', component: IngredientComponent },
  { path: 'films', component: MovieComponent },
  { path: 'carré', component: SquareComponent },
  { path: 'calculatrice', component: CalculatriceComponent },
  { path: 'boutons', component: ButtonComponent },
  { path: 'catalogue', component: CatalogComponent },
  { path: 'héros', component: HeroFormComponent },
  { path: 'inscription', component: SignUpComponent },
  { path: 'formulaire-réactif', component: ReactiveFormComponent },
  { path: 'recherche-film', component: SearchMovieComponent },
  { path: 'parent', component: ParentComponentComponent },
  { path: 'développeur', component: DevelopperComponent },
  { path: 'onomatope', component: OnomatopeFormComponent },
  { path: 'service-cocktails', component: CocktailListComponent },
  { path: 'atelier-formulaire', component: LoginFormComponent },
  { path: 'service-cocktails-json', component: CocktailJsonComponent },
  { path: 'API-Nasa', component: NasaComponent },
  { path: 'adopte-un-chat', component: KittenListComponent },
  { path: 'atelier-input', component: AtelierButtonParentComponent },
  { path: 'pokedex', component: PokedexPageComponent },
  { path: 'ajouter-un-pokemon', component: CreatePokemonComponent },
  { path: 'pokeCard', component: AtelierPokemonListComponent },
  { path: 'levenshtein', component: LevenshteinTestComponent },
  { path: 'MAJ-forms', component: UserComponent },
];

export { ROUTES };
