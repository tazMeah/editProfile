"use strict";

angular.module("App").config(function($routeProvider){
    $routeProvider
    .when("/profile", {
        template: `
        <user-profile></user-profile>

        `
    })
    .when("/editProfile", {
        template: `
        <edit-profile></edit-profile>
        `
    })
    .otherwise({
        redirectTo: "/profile"
    })

})

    