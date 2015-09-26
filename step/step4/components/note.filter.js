angular.module('Brewery.filter', []).filter('NoteFilter', function(){
	return function(value){
		return value > 3 ? 'glyphicon glyphicon-heart' : '';
	};
})