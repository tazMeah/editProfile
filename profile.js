"use strict";
 
const userProfile = {
    template: `
    <figure>
        <div></div>
        <figcaption>
            <h3>Grant Chirpus</h3>
            <span id="contact">grant@grandcircus.co</span>
            <p id="bio">I am pretty cool. I a great job. I like to play Tetris. I am pretty ok at AngularJS.</p>
        </figcaption>
        <button>Edit</button>
    </figure>

    name: "Grant",
    contact: "grant@grandcircus.co",
    bio: "I am pretty cool. I a great job. I like to play Tetris. I am pretty ok at AngularJS."
    
    `
}



angular.module("App")
.component("userProfile", userProfile)