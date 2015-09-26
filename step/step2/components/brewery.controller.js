angular.module('Brewery.controller', []).controller('BreweryCtrl', function(BreweryService){
	this.beers = BreweryService.getBeers();
});