angular.module('video-player')
.directive('videoList', function() {
  return {
  	scope: {
  		videos: '<',
      onClick: '<'
  	},
  	restrict: 'E',
  	controllerAs:'ctrl',
  	bindToController:true,
  	controller: function() {
    },
    templateUrl: 'src/templates/videoList.html'

  };
});
