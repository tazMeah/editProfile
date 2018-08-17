"use strict";
 
const userProfile = {
    template: `
    <figure>
        <div></div>
        <figcaption>
            <h1>{{$ctrl.profileInfo.name}}</h1>
            <span id="contact">{{$ctrl.profileInfo.contact}}</span>
            <p id="bio">{{$ctrl.profileInfo.bio}}</p>
        </figcaption>
        <a href="/#!/editProfile">
            <button>Edit</button>
        </a>
        
    </figure>
    `,
    controller: ["ProfileService", function (ProfileService) {
        const vm = this;
        vm.profileInfo = ProfileService.userProfile;
        /* trying to prepopulate the form with existing values to be edited.
        using the 'value' property did not work. tried ng-value too */
       

        

    }],
    bindings: {
        
    }
}



angular.module("App")
.component("userProfile", userProfile)