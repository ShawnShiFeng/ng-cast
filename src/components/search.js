angular.module('video-player')
.controller('searchController', function(youTube) {
  this.result = (text) => {
    youTube.search(text, this.searchResults);
  }
 })
.directive('search', function() {
  return {
  	scope: {
      searchResults: '<'
  	},
  	controllerAs:'ctrl',
  	bindToController:true,
  	controller: "searchController",
    templateUrl: 'src/templates/search.html'
  };
});
