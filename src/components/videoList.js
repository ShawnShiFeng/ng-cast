angular.module('video-player')
.controller('videoListController', function($scope) {
    
 })
.directive('videoList', function() {
  return {
  	scope: {
      newVideo: '=',
  		videos: '=',
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
