"use strict";
 
const userProfile = {
    template: `
    <figure>
        <div></div>
        <figcaption>
            <h1>Grant Chirpus</h1>
            <span id="contact">grant@grandcircus.co</span>
            <p id="bio">I am pretty cool. I a great job. I like to play Tetris. I am pretty ok at AngularJS.</p>
        </figcaption>
        <a href="/#!/editProfile">
            <button>Edit</button>
        </a>
        
    </figure>
    `
}



angular.module("App")
.component("userProfile", userProfile)