/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View} from 'angular2/angular2'
import {Beer, BreweryService} from './brewery.service'
import {NoteFilter} from './note.filter'

@Component({
	selector: 'beer-item',
	inputs: ['beer'],
	template: `<div class="col-md-4 panel panel-default">
				<div class="panel-heading">
					<span [class]="beer.note | NoteFilter"></span>{{beer.name}}</div>
					<div class="panel-body">
						{{beer.description}}
					</div>
					<button (click)="selectBeer()" class="btn btn-primary">Give me a pinte !</button>
				</div>`,
	pipes: [NoteFilter]
})
export class BeerItem {
	
	public beer:Beer;
	
	constructor(private breweryService:BreweryService){
		
	}	
	
	selectBeer(){
		this.breweryService.getOnePinte(this.beer);
	};
}