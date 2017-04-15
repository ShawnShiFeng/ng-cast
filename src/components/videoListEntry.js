angular.module('video-player')
// .controller('videoListEntryController', function($scope) {
   
//  })
.directive('videoListEntry', function() {

  return {
  	scope : {
  		video: '<',
  	},
	restrict: 'E',
  	controllerAs:'ctrl',
  	bindToController:true,
  	controller: function(){

  	},
    templateUrl: 'src/templates/videoListEntry.html',
 
  };
});
