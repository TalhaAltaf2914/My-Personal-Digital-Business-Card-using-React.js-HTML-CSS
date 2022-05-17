import React from "react";
import profilePhoto from '../images/avatar.png'
export default function Info(){
    return (
        <div id="info-container">
            <img src={profilePhoto} alt="person's img"/>
            <h2 id="info-name">Talha Altaf</h2>
            <h6 id="info-job">Frontend Developer</h6>
            <button id='info-website'>talhaaltaf.website</button>
            <button id='info-email'><i className="fa fa-envelope"></i>Email</button>
            
        </div>
    );
}