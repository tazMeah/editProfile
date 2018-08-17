"use strict";

angular.module("App").config(["$routeProvider", function($routeProvider){
    $routeProvider
    .when("/profile", {
        template: `
        <user-profile></user-profile>

        `
    })
    .when("/editProfile", {
        template: `
        <h1>Edit profile</h1>
        `
    })
    .otherwise({
        redirectTo: "/edit"
    })

}])

    