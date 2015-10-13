/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, NgFor, bootstrap} from 'angular2/angular2'
import {Beer, BreweryService} from './components/brewery.service'
import {BeerItem} from './components/beerItem.directive'

@Component({
	selector: 'app',
	template: `<main>
					<beer-item *ng-for="#b of beers" [beer]="b" ></beer-item>
				</main>`,
	directives: [NgFor, BeerItem]
})
class App {
	beers:Beer[]
	
	constructor(breweryService:BreweryService){
		this.beers = breweryService.getBeers();	
	}	
}

bootstrap(App, [BreweryService])
