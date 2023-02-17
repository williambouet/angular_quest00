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
    
];

export { ROUTES };
