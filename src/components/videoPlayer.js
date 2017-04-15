angular.module('video-player')
.controller('videoPlayerController', function($scope) {

   
 })

.directive('videoPlayer', function() {
  return {
  	scope:{
  		video: '<'
  	},
	restrict: 'E',
  	controllerAs:'ctrl',
  	bindToController:true,
  	controller: 'videoPlayerController',
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
