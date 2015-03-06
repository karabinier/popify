
function appCtrl(Registration, $scope, $rootScope, $http, $location) {
    $scope.info = {};

        $rootScope.updateSession = function (params) {
        $rootScope.session = params;
        if(params.length > 0)
            $rootScope.currentUser = params[2];

            var url = "http://spreadsheets.google.com/feeds/cells/0AvUp2Qmvkk-zdHFXTV9PYS1EaUhXY1UtdGhtSjE5X1E/od6/public/basic?alt=json-in-script&callback=?";
    
        $rootScope.userData = {'pointsBrazil': '' };
    };

    $scope.postToGoogle = function () {
        Registration.postToGoogleSpreadsheet($scope.registration);
    };


    $scope.getInfo = function () {
        /*FB.api('/' + $rootScope.session.Registration_id, function (response) {
            console.log('Good to see you, ' + response.name + '.');
        });*/
        alert($rootScope.currentUser.pointsBrazil);
        $rootScope.info = $rootScope.session;

    };

    
    var defaultFormUrl = "https://docs.google.com/a/lacage.be/forms/d/1b8TYQf0ITtSpY4FuhC86jrfCPYWtMtOntIj78Thldqw/formResponse";
    $scope.activities = [
        {   id : 1,

            name: 'Themagebonden openstelling Herenhuis Delacroix',
            departureHours: ['10u', '11u', '12u', '14u', '15u', '16u', '17u'],
            formUrl: defaultFormUrl
        }
      ];

      $scope.registration = {
        selectedActivity : $scope.activities[0],
        firstName : "",
        lastName : "",
        tel: "",
        email : "",
        postcode : "",
        numberOfPersons :0,
        hourDeparture : "",
        comment : "" };
}