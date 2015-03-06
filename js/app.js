var app = angular.module('loginApp', ['RegistrationProvider','ngRoute','ui.select']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
        templateUrl: 'dashboard.html',
        controller: 'appCtrl'
      }).
      when('/detail/:artistId', {
        templateUrl: 'toptracks.html',
        controller: 'appCtrl'
      }).     
      when('/listing', {
        templateUrl: 'wishlist.html',
        controller: 'appCtrl'
      }).otherwise({
        redirectTo: '/dashboard'
      });
  }]);



app.controller('ChildController', function($scope, $http) {

    var listItemChange = function (oldItem, newItem, scope){
        if(oldItem != newItem)
            saveListItem(scope.prd);
    }

    function saveListItem (prd){

            var apiUrl = "http://lacage.azurewebsites.net/api/Values";//http://jaykay:51826/api/values";//?callback=JSON_CALLBACK"; // "http://jaykay:51826/api/list" + "?callback=JSON_CALLBACK";

            $http({method: 'POST', url: apiUrl, data: prd}).
                error(function(data, status, headers, config) {
                  alert('error');

                });

    }    


    $scope.$watch('prd.comment', listItemChange);
    $scope.$watch('prd.listed', listItemChange);});


app.run(function ($rootScope) {

    (function (d) {

    }(document));

});