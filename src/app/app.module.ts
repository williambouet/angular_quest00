import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { UserProfileComponent } from './UserProfile/UserProfile.component';


@NgModule({
  declarations: [AppComponent, SquareComponent, UserProfileComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
