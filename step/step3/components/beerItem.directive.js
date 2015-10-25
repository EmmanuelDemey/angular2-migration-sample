angular.module('Brewery.directive', []).directive('beerItem', ['BreweryService', function(BreweryService){
	return {
		restrict: 'E',
		scope: {
			beer: '='
		}, 
		controllerAs: 'bi',
		bindToController: true,
		template: '<div class="col-md-4 panel panel-default">' +
				'<div class="panel-heading">' +
					'<span ng-class="bi.beer.note | NoteFilter"></span>{{bi.beer.name}}</div>' +
					'<div class="panel-body">' +
						'{{bi.beer.description}}' +
					'</div>' +
					'<button ng-click="bi.selectBeer()" class="btn btn-primary">Give me a pinte !</button>' +
				'</div>',
		controller: function(){
			this.selectBeer = function(){
				BreweryService.getOnePinte(this.beer);
			};
		}
	};
}]);