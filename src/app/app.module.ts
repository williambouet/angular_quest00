import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';

import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [	
    AppComponent,
    SquareComponent,
   



@NgModule({
  declarations: [		
    AppComponent,
    SquareComponent,
      IngredientComponent,
      ButtonComponent,
         CardComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
