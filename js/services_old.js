var app = angular.module('RegistrationProvider', []);
app.factory('Registration', function ($rootScope) {
    return {
        postToGoogleSpreadsheet:function(registration) {
            var result = "2-3";
            var pointsBrazil = 99;
            $.ajax({//https://docs.google.com/spreadsheets/d/1m418mlWiB-m4oilXZWp49-MV8xGQ4ZsBE3Oc-ywfDnM/pubhtml
                url: "https://docs.google.com/a/lacage.be/forms/d/1b8TYQf0ITtSpY4FuhC86jrfCPYWtMtOntIj78Thldqw/formResponse",
                data: { "entry_2023678217": "firstName", 
                "entry_1841105698": $registration.lastName,
                "entry_1286405048": "tel",
                "entry_351041498": "email",
                "entry_922331852": "postcode",
                "entry_1995805459": "numberOfPersons",
                "entry_1443470760": "hourDeparture",
                "entry_335933636": "comment"},
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function () {
                        window.location.replace("default.html");
                    },
                    200: function () {
                        window.location.replace("default.html");
                    }
                }
            });
        }
    };
});

