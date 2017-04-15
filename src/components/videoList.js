angular.module('video-player')
.controller('videoListController', function($scope) {
   
 })
.directive('videoList', function() {
  return {
  	scope: {
  		videos: '<',
  	},

  	restrict: 'E',
  	controllerAs:'ctrl',
  	bindToController:true,
  	controller: 'videoListController',
    templateUrl: 'src/templates/videoList.html'

  };
});
