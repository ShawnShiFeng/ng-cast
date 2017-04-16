angular.module('video-player')
.service('youTube', function($http){
  
  	this.search = (text, callback) => {

  		var apiUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+ text + "&maxResults=5" + "&key=" + window.YOUTUBE_API_KEY + "&order=viewCount&type=video&relevanceLanguage=zh";

  		$http({
  			method: 'GET',
  			url: apiUrl,
  		}).then(function successCallback(response) {
  			callback(response.data.items);
  		},function errorCallback(reponse) {
  		});
  	};
});
