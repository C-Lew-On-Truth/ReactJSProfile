
import React from 'react';
import ReactDOM from 'react-dom';
import '../style/experience.css';
import SeenThis from "../media/SeenThis.jpeg"
import NY1 from "../media/ny1.jpg"
import Meredith from "../media/meredith.jpg"
import Adobe from "../media/adobe.jpg"

function Experience() {
  return (
    <div className="expo-holder">
      <h1 className="experience-head">Experience</h1>
   <div className="expo-flex">

   <div className="work">
      <h2 className="business-head">Places of Business</h2>
      <div className="expo-flex-1">

 
     <div className="companies">
          <img className="icons" src={SeenThis}/>
          <h3>SeenThis</h3>
          <h4>Technical Producer</h4>
        </div>
        <div className="companies">
          <img className="icons" src={NY1}/>
          <h3>New York One</h3>
          <h4>Media Ingest Editor</h4>
        </div>
        <div className="companies">
          <img className="icons" src={Meredith}/>
          <h3>Meredith</h3>
          <h4>Video Ingest Technician</h4>
        </div>
        <div className="companies">
          <img className="icons" src={Adobe}/>
          <h3>Adobe</h3>
          <h4>Media Operations Coordinator</h4>
        </div>
     
      </div>
    </div>

    <div className="skills">
    <h2 className="skills-head">Skills</h2>
    <div className="expo-flex-2">
       
    </div>
    </div>


   </div>
   <h1 className="resume">Resume</h1>
   </div>
  );
}

export default Experience
