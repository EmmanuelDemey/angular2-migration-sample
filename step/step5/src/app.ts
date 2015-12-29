import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {BeerItem} from './app/beerItem.directive'
import {BreweryService, Beer} from './app/brewery.service'

@Component({
    selector: 'step5-app',
    template: '<main>'+
                '<beer-item *ngFor="#b of beers" [beer]="b" ></beer-item>'+
            '</main>',
    directives: [BeerItem]
})
class App {
    beers: Beer[];
    
    constructor(breweryService:BreweryService){
        this.beers = breweryService.getBeers();    
    }
}

bootstrap(App, [BreweryService])