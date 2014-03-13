var rankPage = angular.module('rank-page', []);
var url_defaultr = 'http://istim-ranking.nodejitsu.com/rank';
function rankController($scope, $http) {
  $scope.formData = {};
  $http.get(url_defaultr+'/')
    .success(function(data) {
      $scope.ranks = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  $scope.createRank = function() {
    $http.post(url_defaultr+'/', $scope.formData)
      .success(function(data) {
        $scope.formData = {};
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  $scope.deleteRank = function(userId) {
    var urlr = url_defaultr+'?userId='+userId;
    $http.delete(urlr)
      .success(function(data) {
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  $scope.updateRank = function(userId) {
    var urlr = url_defaultr+'?userId='+userId;
    if ($scope.formData.newUser) urlr +='&newUser='+$scope.formData.newUser;
    if ($scope.formData.point) urlr +='&point='+$scope.formData.point;
    $http.put(urlr)
      .success(function(data){
        $scope.formData = {};
      })
      .error(function(data){
        console.log('Error: ' + data);
      });
  };
};

var friendPage = angular.module('friend-page', []);
var url_default = 'http://istim-friending.nodejitsu.com/friend';
function friendController($scope, $http) {
  $scope.formData = {};
  $http.get(url_default+'/')
    .success(function(data) {
      $scope.friends = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  $scope.createFriend = function() {
    $http.post(url_default+'/', $scope.formData)
      .success(function(data) {
        $scope.formData = {};
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  $scope.deleteFriend = function(friendId) {
    var url = url_default+'?userId='+friendId;
    $http.delete(url)
      .success(function(data) {
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  $scope.updateFriend = function(friendId) {
    var url = url_default+'?friendId='+friendId;
    if ($scope.formData.newFriend) url +='&newFriend='+$scope.formData.newFriend;
    if ($scope.formData.point) url +='&point='+$scope.formData.point;
    $http.put(url)
      .success(function(data){
        $scope.formData = {};
      })
      .error(function(data){
        console.log('Error: ' + data);
      });
  };
}