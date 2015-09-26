angular.module('Brewery.directive', []).directive('beerItem', function(BreweryService){
	return {
		restrict: 'E',
		scope: {
			beer: '='
		}, 
		template: '<div class="col-md-4 panel panel-default">' +
				'<div class="panel-heading">' +
					'<span ng-class="beer.note | NoteFilter"></span>{{beer.name}}</div>' +
					'<div class="panel-body">' +
						'{{beer.description}}' +
					'</div>' +
					'<button ng-click="selectBeer()" class="btn btn-primary">Give me a pinte !</button>' +
				'</div>',
		link: function($scope){
			$scope.selectBeer = function(){
				BreweryService.getOnePinte($scope.beer);
			};
		}
	};
});