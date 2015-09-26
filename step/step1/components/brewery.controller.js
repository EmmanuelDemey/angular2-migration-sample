angular.module('Brewery.controller', []).controller('BreweryCtrl', function($scope, BreweryService){
	$scope.beers = BreweryService.getBeers();
});