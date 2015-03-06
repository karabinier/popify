
function appCtrl(Registration, $scope, $rootScope, $http, $location, $routeParams) {

    $scope.selectedArtists = []; 


    $scope.selectArtist = function (artist) {
        $scope.selectedArtists.push(artist); 

        var i = $scope.suggestions.indexOf(artist); 
         $scope.suggestions.splice(i,1); 
    };

    $scope.getSuggestions = function () {
        $scope.suggestions =  [
            {'name': 'Eels',
                'snippet': 'Fast just got faster with Nexus S.'},
            {'name': 'Ben Howard',
                'snippet': 'The Next, Next Generation tablet.'},
            {'name': 'dEUS'},
            {'name': 'Macy Gray'},
            {'name': 'Desree'},
            {'name': 'Of Monsers and Man'},
            {'name': 'Noah and the whale'},
            {'name': 'Ben Harper'}
        ];        
    }


}


