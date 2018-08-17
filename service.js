"use strict";


const ProfileService = function(){
    this.userProfile = {
        name: "Grant Chirpus",
        contact: "grant@grandcircus.co",
        bio: "I am pretty cool. I a great job. I like to play Tetris. I am pretty ok at AngularJS."
    };
    this.getUserProfile = function(){
        // returns the profile object
        return this.userProfile;        
    }

    this.setUserProfile = function(profileInput) {
        // replaces the profile object with a new one.
        this.userProfile = profileInput;
        /* now the updated profile data lives in the this.userProfile */
        console.log(`the userProfile is now ${this.userProfile.name}, ${this.userProfile.contact}, ${this.userProfile.bio}`);

    }
}





angular.module("App")
.service("ProfileService", ProfileService)
