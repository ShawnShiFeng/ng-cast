angular.module('video-player')
.controller('appController', function($scope) {

})	
.directive('app', function() {
 
  return {

  	restrict:'E',
  	controllerAs:'ctrl',
  	bindToController:true,
  	controller: function(){
  		this.videos = window.exampleVideoData;
  		this.video = this.videos[0];
  	},
    templateUrl: 'src/templates/app.html', 
  };
})
