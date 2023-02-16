import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { MovieComponent } from './movie/movie.component';
import { SquareComponent } from './square/square.component';
import { ButtonComponent } from './button/button.component';

const ROUTES: Routes = [
    { path: 'fiche', component: CardComponent },
    { path: 'calculatrice', component: CalculatriceComponent },
    { path: 'ingrédient', component: IngredientComponent },
    { path: 'films', component: MovieComponent },
    { path: 'carré', component: SquareComponent },
    { path: 'calculatrice', component: CalculatriceComponent },
    { path: 'boutons', component: ButtonComponent },
    
];

export { ROUTES };
