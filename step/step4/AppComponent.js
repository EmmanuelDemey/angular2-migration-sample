angular.module('Brewery', ['Brewery.service', 'Brewery.filter', 'Brewery.directive'])
	.directive('app', function(BreweryService){
		return {
			template: '<main>'+
							'<beer-item ng-repeat="b in app.beers" beer="b" ></beer-item>'+
						'</main>',
			controllerAs: 'app',
			bindToController: true,
			controller: function(){
				this.beers = BreweryService.getBeers();		
			}
		}
		
	});
