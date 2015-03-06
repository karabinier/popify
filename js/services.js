var app = angular.module('RegistrationProvider', []);
app.factory('Registration', function ($rootScope, $http) {
    return {
        

    };
});


 function sortOn( collection, name ) {
    collection.sort(
        function( a, b ) {
            if ( a[ name ] <= b[ name ] ) {
                return( -1 );
            }
            return( 1 );
        }
    );
}

function groupBy( collection, name ){
    var groupValue = "_INVALID_GROUP_VALUE_";
    var returnValue = []

    for ( var i = 0 ; i < collection.length ; i++ ) {
        var item = collection[ i ];

        // Should we create a new group?
        if ( item[ name ] != groupValue ) {

            var group = {
                label: item[ name ],
                items: []
            };

            groupValue = group.label;

            returnValue.push( group );
        }

        group.items.push( item );
    }

    return returnValue;
}