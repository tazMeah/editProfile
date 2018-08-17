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

    }],
    bindings: {
        
    }
}



angular.module("App")
.component("userProfile", userProfile)