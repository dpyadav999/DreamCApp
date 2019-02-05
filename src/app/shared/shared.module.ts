import { NgModule } from '@angular/core';
import { SportComponent } from './sport.component';
import { TennisComponent } from './tennis.component';
import { FootballComponent } from './football.component';
import { CricketComponent } from './cricket.component';
import { FavoriteComponent } from './favorite.component';


@NgModule({
 imports:[],
 exports:[SportComponent,TennisComponent,FootballComponent],
 declarations:[SportComponent,TennisComponent,FootballComponent,CricketComponent,FavoriteComponent]
})

export class SharedModule{

constructor(){
   console.log("SharedModule Contructor")
    }

}