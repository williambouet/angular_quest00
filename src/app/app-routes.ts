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
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { DevelopperComponent } from './developper/developper.component';
import { OnomatopeFormComponent } from './onomatope-form/onomatope-form.component';

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
    { path: 'parent', component: ParentComponentComponent},
    { path: 'développeur', component: DevelopperComponent },  
    { path: 'onomatope', component: OnomatopeFormComponent},
    
];

export { ROUTES };
