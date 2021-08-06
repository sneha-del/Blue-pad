import React from 'react'
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import { Component } from 'react';
import './about.css';

import Rating from './Rating';
const About = () => {
    return (
        <div className="map-box">
            <h3>Read and write in the language you love</h3>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                <br/>
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                <br/> 
                Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. 
                <br/>
                Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
                <br/>
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                <br/>
                 Curabitur sodales ligula in libero. </h4>
                 <h2>Click on the map below</h2>
         <a href="https://www.google.co.in/maps?hl=en&tab=rl&authuser=0">
            <img className="map"  src="https://cdn.hswstatic.com/gif/maps.jpg" height="100px" />
            </a>
            <Rating/>
        </div>
        // rating system
      
    )
}

export default About
