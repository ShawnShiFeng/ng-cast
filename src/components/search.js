angular.module('video-player')
.controller('videoListController', function($scope) {
    $scope.videos = window.exampleVideoData;
    $scope.result = function(){};
 })

.directive('search', function() {
  return {
  	scope: {
  		result: '='
  	},
  	restrict: 'E',
  	controllerAs:'ctrl',
  	bindToController:true,
  	controller: 'videoListController',
    templateUrl: 'src/templates/search.html'
  };
});
