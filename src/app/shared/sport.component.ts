import { Component, ViewEncapsulation } from '@angular/core';


@Component({
selector:'app-sport',
templateUrl:'./sport.component.html'
})

export class SportComponent{

constructor(){
    console.log("SportComponent Constructor")
}
}