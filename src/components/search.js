angular.module('video-player')
.controller('videoListController', function($scope) {
  
    
 })

.directive('search', function() {
  return {
  	scope: {
  		result: '='
  	},
  	restrict: 'E',
  	controllerAs:'ctrl',
  	bindToController:true,
  	controller: function() {
      this.result = function(){};
    },
    templateUrl: 'src/templates/search.html'
  };
});
