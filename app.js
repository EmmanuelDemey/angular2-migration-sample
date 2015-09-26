var module = angular.module('Brasserie', []);
module.service('BrasserieService', function(){
		this.getBeers = function(){
			return [
				{name:'Heinekken', note: 0, description:'Petite Description...'},
				{name:'Leffe', note: 2.5, description:'Petite Description...'},
				{name:'Chouffe', note: 4, description:'Petite Description...Petite Description...Petite Description...Petite Description...Petite Description...Petite Description...Petite Description...Petite Description...Petite Description...Petite Description...Petite Description...Petite Description...Petite Description...'},
				{name:'Cuvée des Jonquilles', note: 4.5, description:'Petite Description...'},
				{name:'Moinette', note: 4, description:'Petite Description...'},
				{name:'Saint Feuillin', note: 4, description:'Petite Description...Petite Description...Petite Description...Petite Description...Petite Description...Petite Description...'}
			];	
		};
		
		this.getOnePinte = function(beer){
			alert('La pinte de ' + beer.name + ' est bientôt prête !');
		};
	})
module.controller('BrasserieCtrl', function($scope, BrasserieService){
		$scope.beers = BrasserieService.getBeers();
		
	})
module.filter('NoteFilter', function(){
		return function(value){
			return value > 3 ? 'glyphicon glyphicon-heart' : '';
		};
	})
module.directive('beerItem', function(BrasserieService){
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
					BrasserieService.getOnePinte($scope.beer);
				};
			}
		};
	});