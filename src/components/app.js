angular.module('video-player')
.controller('appController', function($scope) {

})	
.directive('app', function() {
  
  return {
    scope:{

    },
  	restrict:'E',
  	controllerAs:'ctrl',
  	bindToController:true,
  	controller: function(){
      this.onClick = (newVideo) => {
        // debugger;
        // this.currentVideo = newVideo;
        // console.log(currentVideo);
        // console.log(newVideo);
        this.currentVideo = newVideo;
      }
    
      this.selectVideo = function() {

      };

      this.searchResults = function() {

      };



  		this.videos = window.exampleVideoData;
  		this.currentVideo = this.videos[0];
  	},
    templateUrl: 'src/templates/app.html', 
  };
})
