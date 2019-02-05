import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { SharedModule } from './shared/shared.module';
import { SportComponent } from './shared/sport.component';
import { FooterComponent } from './footer.component';
import { FootballComponent } from './shared/football.component';
import { TennisComponent } from './shared/tennis.component';
import { CricketComponent } from './shared/cricket.component';
import { FavoriteComponent } from './shared/favorite.component';





let appRoutes: Routes = [
  { path: "favorites", component: FavoriteComponent },
  { path: "cricket", component: CricketComponent },
  { path: "tennis", component: TennisComponent },
  { path: "football", component: FootballComponent },
]





@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent
  ],
  imports: [
    BrowserModule, SharedModule, RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log("App Module Constructor")
  }
}
