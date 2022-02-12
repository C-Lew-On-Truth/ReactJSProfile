
import React from 'react';
import ReactDOM from 'react-dom';
import '../style/experience.css';
import SeenThis from "../media/SeenThis.jpeg"
import NY1 from "../media/ny1.jpg"
import Meredith from "../media/meredith.jpg"
import Adobe from "../media/adobe.jpg"

const test = {
    color: "white",
}

function Experience() {
  return (
    <div className="expo-holder">
      <h1>Experience</h1>
   <div className="expo-flex">

   <div className="work">
      <h2>Place of Business</h2>
      <div className="expo-flex-1">

        <div class="companies">
          <img class="icons" src={SeenThis}/>
          <h3>SeenThis</h3>
          <h4>Technical Producer</h4>
        </div>
        <div class="companies">
          <img class="icons" src={NY1}/>
          <h3>New York One</h3>
          <h4>Media Ingest Editor</h4>
        </div>
        <div class="companies">
          <img class="icons" src={Meredith}/>
          <h3>Meredith</h3>
          <h4>Video Ingest Technician</h4>
        </div>
        <div class="companies">
          <img class="icons" src={Adobe}/>
          <h3>Adobe</h3>
          <h4>Media Operations Coordinator</h4>

        </div>
      </div>
    </div>

    <div className="skills">
    <h2>Skills</h2>
    <div className="expo-flex-2">
       
    </div>
    </div>


   </div>
   <h1>Resume</h1>
   </div>
  );
}

export default Experience
