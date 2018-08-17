"use strict";

const editProfile = {
  template: `
    <figure>
        
        <figcaption>
            <h2>Use the form below to update your profile.</h2>
            <form>
                <label>
                    <h3>Name</h3>
                    <input>
                </label>
                <label>
                    <h3>Contact</h3>
                    <input>
                </label>
                <label>
                    <h3>Bio</h3>
                    <input>
                </label>
            </form>
            <span id="contact">grant@grandcircus.co</span>
            <p id="bio">I am pretty cool. I a great job. I like to play Tetris. I am pretty ok at AngularJS.</p>
        </figcaption>
        <a>
            <button>Update</button>
        </a>
    </figure>
    `,
    controller: function () {
        
    }

};




angular.module("App")
.component("editProfile", editProfile)