
import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider.jsx'
import '../style/about-me.css';
import '../style/projects.css';
import { SliderInfo } from './SliderInfo.jsx';


function Projects() {
  return (
    <div className="project-holder">
    
      <div className="slide-holder">
      <Slider slides={SliderInfo}/>
      </div>
   </div>
  );
}

export default Projects
