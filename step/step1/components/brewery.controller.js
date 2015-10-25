angular.module('Brewery.controller', []).controller('BreweryCtrl', ['$scope', 'BreweryService', function($scope, BreweryService){
	$scope.beers = BreweryService.getBeers();
}]);