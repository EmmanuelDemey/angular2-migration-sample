angular.module('Brewery.controller', []).controller('BreweryCtrl', ['BreweryService', function(BreweryService){
	this.beers = BreweryService.getBeers();
}]);