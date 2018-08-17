"use strict";


const ProfileService = function(){
    let userProfile = {
        name: "Grant",
        contactInfo: "grant@grandcircus.co",
        bio: "I am pretty cool. I a great job. I like to play Tetris. I am pretty ok at AngularJS."
    };
    this.getUserProfile = function(){
        // returns the profile object
    }

    this.setUserProfile = function() {
        // replaces the profile object with a new one.
    }
}





angular.module("App")
.service("ProfileService", ProfileService)
