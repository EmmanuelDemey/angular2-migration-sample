import {Component, OnInit, Input} from 'angular2/core';
import {Beer, BreweryService} from './brewery.service'
import {NoteFilter} from './note.filter'

@Component({
    selector: 'beer-item',
    template: '<div class="col-md-4 panel panel-default">' +
				'<div class="panel-heading">' +
					'<span [class]="beer.note | NoteFilter"></span>{{beer.name}}</div>' +
					'<div class="panel-body">' +
						'{{beer.description}}' +
					'</div>' +
					'<button (click)="selectBeer()" class="btn btn-primary">Give me a pinte !</button>' +
				'</div>',
     pipes: [NoteFilter]
})

export class BeerItem implements OnInit {
    
    @Input() beer:Beer;

    constructor(private breweryService:BreweryService) { }

    selectBeer(){
        this.breweryService.getOnePinte(this.beer);    
    }
    
    ngOnInit() { }
}