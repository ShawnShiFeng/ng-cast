angular.module('video-player')
.controller('appController', function($scope, youTube) {



      this.onClick = (newVideo) => {
        this.selectVideo(newVideo);
      }
    
      this.selectVideo = function(newVideo) {
          this.currentVideo = newVideo ? newVideo : {};
      };

      this.searchResults = (data) => {
        this.videos = data;
        this.currentVideo = this.videos[0] ? this.videos[0] : {};
      };
      
        youTube.search('gundam', this.searchResults);      
      



   
})	
.directive('app', function() {
  
  return {
    scope:{
    },
  	restrict:'E',
  	controllerAs:'ctrl',
  	bindToController:true,
  	controller: 'appController',
    templateUrl: 'src/templates/app.html', 
  };
})
