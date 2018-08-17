"use strict";

const editProfile = {
  template: `
  
    <form id="editForm">
        <h2>Use the form below to update your profile.</h2>
        <label>
            <h3>Name</h3>
            <input ng-model="$ctrl.inputs.name">
        </label>
        <label>
            <h3>Contact</h3>
            <input ng-model="$ctrl.inputs.contact">
        </label>
        <label>
            <h3>Bio</h3>
            <input ng-model="$ctrl.inputs.bio">
        </label>
        <a>
            <button id="update" ng-click="$ctrl.sendToService($ctrl.inputs)">Update</button>
        </a>
    </form>
            
        
    `,
    controller: function () {
        const vm = this;
        vm.sendToService = function(profileInputs) {
            console.log(profileInputs)
        }
    }

};




angular.module("App")
.component("editProfile", editProfile)