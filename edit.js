"use strict";

const editProfile = {
  template: `
  
    <form id="editForm" >
        <h2>Use the form below to update your profile.</h2>
        <label>
            <h3>Name</h3>
            <input ng-model="$ctrl.inputs.name" id="name">
        </label>
        <label>
            <h3>Contact</h3>
            <input ng-model="$ctrl.inputs.contact" id="contact">
        </label>
        <label>
            <h3>Bio</h3>
            <!--<input ng-model="$ctrl.inputs.bio" id="bio">-->
             <textarea ng-model="$ctrl.inputs.bio" id="bio"></textarea>
        </label>
        <a href="#!/profile">
            <button id="update" ng-click="$ctrl.sendToService($ctrl.inputs)">Update</button>
        </a>
    </form>
            
        
    `,
    controller: ["ProfileService", function (ProfileService) {
        const vm = this;
        vm.sendToService = function(profileInputs) {
            ProfileService.setUserProfile(profileInputs);
            

        }
    }]

};




angular.module("App")
.component("editProfile", editProfile)